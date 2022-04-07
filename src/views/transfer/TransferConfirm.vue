<template>
  <div class="container">
    <div class="row">
      <div class="mb-1 col col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
        <app-wizard
          :steps="transferSteps"
          :currentStep="3" />
      </div>
      <div class="col col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-card>
          <div class="position-relative">
            <router-link
              :to="{ name: 'TransferAmount'}"
              tag="a"
              v-waves
              class="position-absolute btn btn-iconed btn-small btn-secondary-flat"
              content="Go Back"
              v-tippy>
              <i class="fas fa-chevron-left" />
            </router-link>
            <h3 class="clr-primary text-center mb-1">
              Confirm Transfer
            </h3>
          </div>
          <p class="text-center mb-3">Review your transfer and confirm it.</p>

          <h4 class="mb-1">
            Transfer Details
          </h4>
          <ul class="mb-3 p-0">
            <li class="d-flex align-items-center mb-25">
              <span>Sender Name</span>
              <span class="ml-auto clr-primary text-truncate maxw-50">{{ profileSettings.account.firstname }}</span>
            </li>
            <li class="d-flex align-items-center mb-25">
              <span>Transfer Amount</span>
              <span class="ml-auto clr-primary">{{ newTransfer.amount | commaValue }}</span>
            </li>
            <li class="d-flex align-items-center mb-25">
              <span>Transfer Fee</span>
              <span class="ml-auto clr-primary">{{ user.fees.payment | commaValue }}</span>
            </li>
            <li class="d-flex align-items-center mb-25">
              <span>Transit Time</span>
              <span class="ml-auto clr-primary">Instant</span>
            </li>
          </ul>

          <h4 class="mb-1">
            Beneficiary Details
          </h4>
          <ul class="mb-3 p-0">
            <li class="d-flex align-items-center mb-25">
              <span>Company Name</span>
              <span
                v-tippy
                :content="newTransfer.company"
                class="ml-auto clr-primary text-truncate maxw-50">{{ newTransfer.company }}</span>
            </li>
            <li class="d-flex align-items-center mb-25">
              <span>Receiver Name</span>
              <span class="ml-auto clr-primary">{{ newTransfer.fullname }}</span>
            </li>
          </ul>

          <div v-if="newTransfer.reference.length > 0">
            <h4>
              Note
            </h4>
            <p class="font-italic small">{{ newTransfer.reference }}</p>
          </div>

          <ul class="mb-3 p-0">
            <hr>
            <li class="d-flex align-items-center mb-25">
              <span class="pr-1">Total</span>
              <span class="ml-auto text-right font-weight-500 clr-primary h4">{{ newTransfer.amount + user.fees.payment | commaValue }}</span>
            </li>
          </ul>

          <button
            v-if="!newTransferResponse"
            v-waves
            class="btn btn-primary btn-medium btn-block"
            @click="addTransfer">
            Transfer Now
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

    <app-preloader :show="newTransferResponse" />
  </div>
</template>

<script>
import { transferSteps } from '@/router/wizard'
import { eventBus } from '../../main'

export default {
  name: 'TransferConfirm',
  data() {
    return {
      transferSteps: [],
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
    newTransfer() {
      return this.$store.state.transfer.newTransfer
    },

    newTransferResponse() {
      return this.$store.state.transfer.responses.newTransfer
    },

    profileSettings() {
      return this.$store.state.user.settings
    },

    user() {
      return this.$store.state.auth.user
    },
  },
  created() {
    this.transferSteps = transferSteps
  },
  mounted() {
    eventBus.$on('showToast/TransferConfirm', data => { this.showToast(data) })

    this.restrictAccess()
  },
  beforeDestroy() {
    eventBus.$off('showToast/TransferConfirm')
  },
  methods: {
    addTransfer() {
      // Back-end requires exactly this format of data 🤷‍♂️
      let formData = new FormData()

      formData.append('form[member_id]', this.newTransfer.id)
      formData.append('form[amount]', this.newTransfer.amount)
      formData.append('form[reference]', this.newTransfer.reference)

      this.$store.dispatch('transfer/newTransfer', {
        formData: formData,
        type: 'new',
      })
    },

    restrictAccess() {
      if (
        !this.user.payments ||
        this.newTransfer.amount == 0 ||
        this.newTransfer.company.length == 0) {
        this.$router.push({ name: 'Transfer' }).catch(err => {
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
