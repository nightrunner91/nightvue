<template>
  <div class="container">
    <div class="row">
      <div class="mb-1 col col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
        <app-wizard
          :steps="receiveSteps"
          :currentStep="3" />
      </div>
      <div class="col col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-card>
          <div class="position-relative">
            <router-link
              :to="{ name: 'ReceiveAmount'}"
              tag="a"
              v-waves
              class="position-absolute btn btn-iconed btn-small btn-secondary-flat"
              content="Go Back"
              v-tippy>
              <i class="fas fa-chevron-left" />
            </router-link>
            <h3 class="clr-primary text-center mb-1">
              Confirm Request
            </h3>
          </div>
          <p class="text-center mb-3">Review your request and confirm it.</p>

          <h4 class="mb-1">
            Request Details
          </h4>
          <ul class="mb-3 p-0">
            <li class="d-flex align-items-center mb-25">
              <span>Your Request Amount</span>
              <span class="ml-auto clr-primary">{{ newReceive.amount | commaValue }}</span>
            </li>
            <li class="d-flex align-items-center mb-25">
              <span>Fee Method</span>
              <span class="ml-auto clr-primary">{{ newReceive.feeTitle }}</span>
            </li>
            <li class="d-flex align-items-center mb-25">
              <span>Request Fee</span>
              <span class="ml-auto clr-primary">{{ newReceive.feeValue | commaValue }}</span>
            </li>
          </ul>

          <h4 class="mb-1">
            Payer Details
          </h4>
          <ul class="mb-3 p-0">
            <li class="d-flex align-items-center mb-25">
              <span>Company Name</span>
              <span
                v-tippy
                :content="newReceive.company"
                class="ml-auto clr-primary text-truncate maxw-50">{{ newReceive.company }}</span>
            </li>
            <li class="d-flex align-items-center mb-25">
              <span>Payer Name</span>
              <span class="ml-auto clr-primary">{{ newReceive.fullname }}</span>
            </li>
          </ul>

          <div v-if="newReceive.reference.length > 0">
            <h4>
              Note
            </h4>
            <p class="font-italic small">{{ newReceive.reference }}</p>
          </div>

          <ul class="mb-3 p-0">
            <hr>
            <li class="d-flex align-items-center mb-25">
              <span class="pr-1">Total</span>
              <span class="ml-auto text-right font-weight-500 clr-primary h4">{{ newReceive.amount + newReceive.feeValue | commaValue }}</span>
            </li>
            <li class="d-flex align-items-center mb-25">
              <span class="pr-1">You Receive</span>
              <span class="ml-auto text-right font-weight-500 clr-primary h4">{{ newReceive.amount | commaValue}}</span>
            </li>
          </ul>

          <button
            v-if="!newReceiveResponse"
            v-waves
            class="btn btn-primary btn-medium btn-block"
            @click="addReceive">
            Send Request
          </button>
          <button
            v-else
            disabled
            class="btn btn-medium btn-block">
            <span class="btn__loading">Please Wait</span>
          </button>
        </app-card>
      </div>
    </div>

    <app-preloader :show="newReceiveResponse" />
  </div>
</template>

<script>
import { receiveSteps } from '@/router/wizard'
import { eventBus } from '../../main'

export default {
  name: 'ReceiveConfirm',
  data() {
    return {
      receiveSteps: [],
    }
  },
  filters: {
    commaValue(value) {
      const testVal = value !== undefined && value !== null && typeof value === 'number'

      if (testVal) {
        const whole = Math.abs(Math.trunc(value)).toString()
        const decimal = (value % 1).toFixed(2).toString().split('.')[1]
        const newstr = []
        for (let i = whole.length; i > 0; i -= 3) {
          newstr.unshift(whole.substring(i, i - 3))
        }
        if (value < 0) {
          return `-$${newstr.join(',')}.${decimal}`
        } else {
          return `$${newstr.join(',')}.${decimal}`
        }
      } else {
        return '$0.00'
      }
    },
  },
  computed: {
    newReceive() {
      return this.$store.state.receive.newReceive
    },

    newReceiveResponse() {
      return this.$store.state.receive.responses.newReceive
    },

    profileSettings() {
      return this.$store.state.user.settings
    },

    user() {
      return this.$store.state.auth.user
    },
  },
  created() {
    this.receiveSteps = receiveSteps
  },
  mounted() {
    eventBus.$on('showToast/ReceiveConfirm', data => { this.showToast(data) })

    this.restrictAccess()
  },
  beforeDestroy() {
    eventBus.$off('showToast/ReceiveConfirm')
  },
  methods: {
    addReceive() {
      // Back-end requires exactly this format of data 🤷‍♂️
      let formData = new FormData()

      formData.append('form[member_id]', this.newReceive.id)
      formData.append('form[amount]', this.newReceive.amount)
      formData.append('form[fee_by]', this.newReceive.feeType)
      formData.append('form[reference]', this.newReceive.reference)

      this.$store.dispatch('receive/newReceive', formData)
    },

    restrictAccess() {
      if (
        !this.user.payments ||
        this.newReceive.amount == 0 ||
        this.newReceive.company.length == 0) {
        this.$router.push({ name: 'Receive' }).catch(err => {
          console.error(err)
        })
      }
    },

    showToast(data) {
      this.$toast(data.message, {
        type: data.type
      })
    }
  }
}
</script>
