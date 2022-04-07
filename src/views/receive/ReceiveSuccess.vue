<template>
  <div class="container">
    <div class="row">
      <div class="mb-1 col col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
        <app-wizard
          :steps="receiveSteps"
          :currentStep="4" />
      </div>
      <div class="col col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-card>
          <h2 class="text-center d-flex justify-content-center align-items-center mb-1">
            <span>Success</span>
            <i class="fas fa-check fa-xs ml-50" />
          </h2>
          <p class="text-center mb-3">Request sended.</p>
          <div class="d-flex align-items-center mb-1">
            <h4 class="m-0">
              Request Details
            </h4>
          </div>
          <ul class="mx-0 mb-2 p-0">
            <li class="d-flex align-items-center mb-25">
              <span>ID</span>
              <span class="ml-auto text-right clr-primary">#{{ uploadData.id }}</span>
            </li>
            <li class="d-flex align-items-center mb-25">
              <span>Sender Name</span>
              <span class="ml-auto clr-primary">{{ profileSettings.account.firstname }}</span>
            </li>
            <li class="d-flex align-items-center mb-25">
              <span>Beneficiary Name</span>
              <span
                v-tippy
                :content="newReceive.company"
                class="ml-auto clr-primary text-truncate maxw-50">{{ newReceive.company }}</span>
            </li>
            <li class="d-flex align-items-center mb-25">
              <span>Payer Name</span>
              <span class="ml-auto clr-primary">{{ newReceive.fullname }}</span>
            </li>
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
            <li class="d-flex align-items-center mb-25">
              <span>Transit Time</span>
              <span class="ml-auto clr-primary">Instant</span>
            </li>
            <hr>
            <li class="d-flex align-items-center mb-25">
              <span class="pr-1">Total</span>
              <span class="ml-auto text-right font-weight-500 clr-primary h4">{{ newReceive.amount + newReceive.feeValue | commaValue }}</span>
            </li>
          </ul>
          <button
            class="btn btn-primary btn-medium btn-block"
            @click="returnToReceive">
            Go Back to Requests
          </button>
        </app-card>
      </div>
    </div>
  </div>
</template>

<script>
import { receiveSteps } from '@/router/wizard'

export default {
  name: 'ReceiveSuccess',
  filters: {
    commaValue(value) {
      const testVal = value !== undefined && value !== null && typeof value === 'number'

      if (testVal) {
        const whole = Math.floor(value).toString()
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
  data() {
    return {
      receiveSteps: [],
    }
  },
  computed: {
    uploadData() {
      return this.$store.state.receive.uploadData
    },

    newReceive() {
      return this.$store.state.receive.newReceive
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
    this.redirectToReceive()
  },
  beforeDestroy() {
    this.clearUploadData()
  },
  methods: {
    redirectToReceive() {
      if (Object.keys(this.uploadData).length === 0) {
        this.$router.push({ name: 'Receive' }).catch(err => {
          console.error(err)
        })
      }
    },

    clearUploadData() {
      this.$store.commit('receive/CLEAR_UPLOAD_DATA')
    },

    returnToReceive() {
      this.$store.dispatch('auth/checkLogin')

      this.$router.push({ name: 'Receive' }).catch(err => {
        console.error(err)
      })
    },
  }
}
</script>
