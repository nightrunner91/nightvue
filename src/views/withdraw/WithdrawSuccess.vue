<template>
  <div class="container">
    <div class="row">
      <div class="mb-1 col col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-wizard
          :steps="withdrawSteps"
          :currentStep="3" />
      </div>
      <div class="col col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-card>
          <h2 class="text-center d-flex justify-content-center align-items-center mb-1">
            <span>Success</span>
            <i class="fas fa-check fa-xs ml-50" />
          </h2>
          <p class="text-center mb-3">Your payment will be reflected in your balance in next 2 hours. If not, please contact support.</p>
          <div class="d-flex align-items-center mb-1">
            <h4 class="m-0">
              Withdraw Details
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
              <span>Bank Name</span>
              <span class="ml-auto clr-primary">{{ profileSettings.billing.bank_name }}</span>
            </li>
            <li
              v-if="profileSettings.billing.iban"
              class="d-flex align-items-center mb-25">
              <span>IBAN</span>
              <span class="ml-auto clr-primary">{{ profileSettings.billing.iban }}</span>
            </li>
            <li
              v-else
              class="d-flex align-items-center mb-25">
              <span>Account Number</span>
              <span class="ml-auto clr-primary">{{ profileSettings.billing.account_number }}</span>
            </li>
            <li class="d-flex align-items-center mb-25">
              <span>Withdraw Amount</span>
              <span class="ml-auto clr-primary">${{ newWithdrawal.amount }}</span>
            </li>
            <li class="d-flex align-items-center mb-25">
              <span>Transit Time</span>
              <span class="ml-auto clr-primary">
                24 Business Hours
              </span>
            </li>
            <hr>
            <li class="d-flex align-items-center mb-25">
              <span class="pr-1">Balance in BOT Wallet</span>
              <span class="ml-auto text-right font-weight-500 clr-primary h4">{{ uploadData.withdrawable_balance | commaValue }}</span>
            </li>
          </ul>
          <button
            class="btn btn-primary btn-medium btn-block"
            @click="returnToWithdraw">
            Go Back to Withdrawals
          </button>
        </app-card>
      </div>
    </div>
  </div>
</template>

<script>
import { withdrawSteps } from '@/router/wizard'

export default {
  name: 'WithdrawSuccess',
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
      withdrawSteps: [],
    }
  },
  computed: {
    uploadData() {
      return this.$store.state.withdraw.uploadData
    },

    newWithdrawal() {
      return this.$store.state.withdraw.newWithdrawal
    },

    profileSettings() {
      return this.$store.state.user.settings
    },
  },
  created() {
    this.withdrawSteps = withdrawSteps
  },
  mounted() {
    this.redirectToWithdraw()
  },
  beforeDestroy() {
    this.clearUploadData()
  },
  methods: {
    redirectToWithdraw() {
      if (Object.keys(this.uploadData).length === 0) {
        this.$router.push({ name: 'Withdraw' }).catch(err => {
          console.error(err)
        })
      }
    },

    clearUploadData() {
      this.$store.commit('withdraw/CLEAR_UPLOAD_DATA')
    },

    returnToWithdraw() {
      this.$store.dispatch('auth/checkLogin')

      this.$router.push({ name: 'Withdraw' }).catch(err => {
        console.error(err)
      })
    },
  }
}
</script>
