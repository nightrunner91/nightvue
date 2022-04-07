<template>
  <div class="container">
    <div class="row">
      <div class="mb-1 col col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-wizard
          :steps="withdrawSteps"
          :currentStep="2" />
      </div>
      <div class="col col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-card>
          <div class="position-relative">
            <router-link
              :to="{ name: 'WithdrawNew'}"
              tag="a"
              v-waves
              class="position-absolute btn btn-iconed btn-small btn-secondary-flat"
              content="Go Back"
              v-tippy>
              <i class="fas fa-chevron-left" />
            </router-link>
            <h3 class="clr-primary text-center mb-1">
              Confirm Withdraw
            </h3>
          </div>
          <p class="text-center mb-3">Review your withdraw and confirm it.</p>
          <h4 class="mb-1">
            Withdraw Details
          </h4>
          <ul class="mb-3 p-0">
            <li class="d-flex align-items-center mb-25">
              <span>Sender Name</span>
              <span class="ml-auto clr-primary text-truncate maxw-50">{{ profileSettings.account.firstname }}</span>
            </li>
            <li class="d-flex align-items-center mb-25">
              <span>Bank Name</span>
              <span class="ml-auto clr-primary text-truncate maxw-50">{{ profileSettings.billing.bank_name }}</span>
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
          </ul>
          <button
            v-if="!newWithdrawalResponse"
            v-waves
            class="btn btn-primary btn-medium btn-block"
            @click="addWithdraw">
            Withdraw Now
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

    <app-preloader :show="newWithdrawalResponse" />
  </div>
</template>

<script>
import { withdrawSteps } from '@/router/wizard'
import { eventBus } from '../../main'

export default {
  name: 'WithdrawConfirm',
  data() {
    return {
      userData: {
        amount: undefined,
      },

      withdrawSteps: [],
    }
  },
  computed: {
    newWithdrawal() {
      return this.$store.state.withdraw.newWithdrawal
    },

    newWithdrawalResponse() {
      return this.$store.state.withdraw.responses.newWithdrawal
    },

    profileSettings() {
      return this.$store.state.user.settings
    },

    user() {
      return this.$store.state.auth.user
    },
  },
  created() {
    this.withdrawSteps = withdrawSteps
  },
  mounted() {
    eventBus.$on('showToast/WithdrawConfirm', data => { this.showToast(data) })

    this.restrictAccess()
  },
  beforeDestroy() {
    eventBus.$off('showToast/WithdrawConfirm')
  },
  methods: {
    addWithdraw() {
      // Back-end requires exactly this format of data 🤷‍♂️
      let formData = new FormData()

      formData.append('form[amount]', this.newWithdrawal.amount)

      this.$store.dispatch('withdraw/newWithdrawal', formData)
    },

    restrictAccess() {
      if (!this.user.payments || this.newWithdrawal.amount == undefined) {
        this.$router.push({ name: 'Withdraw' }).catch(err => {
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
