<template>
  <div class="container">
    <div class="row">
      <div class="mb-1 col col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
        <app-wizard
          :steps="transferSteps"
          :currentStep="4" />
      </div>
      <div class="col col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-card>
          <h2 class="text-center d-flex justify-content-center align-items-center">
            <span>Success</span>
            <i class="fas fa-check fa-xs ml-50" />
          </h2>
          <p class="text-center mb-3">Transfer transaction completed.</p>
          <div class="d-flex align-items-center mb-1">
            <h4 class="m-0">
              Transfer Details
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
                :content="newTransfer.company"
                class="ml-auto clr-primary text-truncate maxw-50">{{ newTransfer.company }}</span>
            </li>
            <li class="d-flex align-items-center mb-25">
              <span>Receiver Name</span>
              <span class="ml-auto clr-primary">{{ newTransfer.fullname }}</span>
            </li>
            <li class="d-flex align-items-center mb-25">
              <span>Transit Time</span>
              <span class="ml-auto clr-primary">Instant</span>
            </li>
            <li class="d-flex align-items-center mb-25">
              <span>Total</span>
              <span class="ml-auto clr-primary">${{ newTransfer.amount + user.fees.payment }}</span>
            </li>
            <hr>
            <li class="d-flex align-items-center mb-25">
              <span class="pr-1">Balance in BOT Wallet</span>
              <span class="ml-auto text-right font-weight-500 clr-primary h4">{{ uploadData.balance | commaValue }}</span>
            </li>
          </ul>
          <button
            class="btn btn-primary btn-medium btn-block"
            @click="returnToTransfer">
            Go Back to Transfers
          </button>
        </app-card>
      </div>
    </div>
  </div>
</template>

<script>
import { transferSteps } from '@/router/wizard'

export default {
  name: 'TransferSuccess',
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
  data() {
    return {
      transferSteps: [],
    }
  },
  computed: {
    uploadData() {
      return this.$store.state.transfer.uploadData
    },

    newTransfer() {
      return this.$store.state.transfer.newTransfer
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
    this.redirectToTransfer()
  },
  beforeDestroy() {
    this.clearUploadData()
  },
  methods: {
    redirectToTransfer() {
      if (Object.keys(this.uploadData).length === 0) {
        this.$router.push({ name: 'Transfer' }).catch(err => {
          console.error(err)
        })
      }
    },

    clearUploadData() {
      this.$store.commit('transfer/CLEAR_UPLOAD_DATA')
    },

    returnToTransfer() {
      this.$store.dispatch('auth/checkLogin')

      this.$router.push({ name: 'Transfer' }).catch(err => {
        console.error(err)
      })
    },
  }
}
</script>
