<template>
  <div class="container">
    <div class="row">
      <div class="mb-1 col col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-wizard
          :steps="withdrawSteps"
          :currentStep="1" />
      </div>
      <div class="col col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-card>
          <form
            @submit="addWithdraw($event)"
            novalidate="true"
            class="d-flex flex-column">
            <div class="position-relative">
              <router-link
                :to="{ name: 'Withdraw'}"
                tag="a"
                v-waves
                class="position-absolute btn btn-iconed btn-small btn-secondary-flat"
                content="Go Back"
                v-tippy>
                <i class="fas fa-chevron-left" />
              </router-link>
              <h3 class="clr-primary text-center mb-1">
                Amount
              </h3>
            </div>
            <p class="text-center mb-3">How much you want to withdraw?</p>
            <div class="input">
              <label
                for="amount"
                class="input__label d-flex align-items-center flex-wrap">
                <span class="text-nowrap">Enter Amount</span>
                <span class="ml-auto d-flex align-items-center justfify-content-start justify-content-xs-end small w-100 w-xs-50 text-nowrap">
                  <span class="clr-black mr-25 font-weight-400">Withdrawable Balance:</span>
                  <span
                    v-tippy
                    content="Enter all Withdrawable Balance"
                    class="withdraw-all radius-base p-25"
                    @click="withdrawAll(), clearValidation('amount')">
                    {{ user.withdrawable_balance | commaValue }}
                  </span>
                </span>
              </label>
              <div class="input-group">
                <input
                  id="amount"
                  ref="withdrawAmount"
                  type="number"
                  class="input__field input__field--medium"
                  :class="isInvalid('amount') ? 'input__field--invalid' : null"
                  placeholder="$250"
                  autocomplete="off"
                  v-model.number="userData.amount"
                  @input="clearValidation('amount')" />
                <div class="input-group__prepend">
                  <svg-icon
                    icon="logo-rounded"
                    :sizes="[24, 24]" />
                </div>
              </div>
              <label
                for="amount"
                v-for="(error, index) in validations.amount"
                :key="`amount-error-${index}`"
                v-show="!error.valid"
                class="input__error">
                <i class="fas fa-exclamation-triangle mr-50" />
                <span>{{ error.message }}</span>
              </label>
            </div>

            <div class="input">
              <label
                for="withdraw_to"
                class="input__label">
                Withdraw to
              </label>
              <div class="input-group">
                <input
                  disabled
                  id="withdraw_to"
                  ref="withdrawTo"
                  type="text"
                  class="input__field input__field--medium"
                  autocomplete="off"
                  :value="`${profileSettings.billing.bank_name} — ${profileSettings.billing.iban || profileSettings.billing.account_number}`" />
                <div class="input-group__prepend">
                  <i class="fas fa-university fa-lg" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              v-waves
              class="btn btn-medium btn-primary btn-block">
              Continue
            </button>
          </form>
        </app-card>
      </div>
    </div>
  </div>
</template>

<script>
import { withdrawSteps } from '@/router/wizard'
import { eventBus } from '../../main'

export default {
  name: 'WithdrawNew',
  data() {
    return {
      userData: {
        amount: undefined,
      },

      withdrawSteps: [],

      validations: {
        amount: {
          required: {
            valid: true,
            message: 'Amount field is required.',
          },
        },
      },
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
    eventBus.$on('showToast/WithdrawNew', data => { this.showToast(data) })

    this.focusInput()
    this.restrictAccess()
  },
  beforeDestroy() {
    eventBus.$off('showToast/WithdrawNew')
  },
  methods: {
    validateForm(event) {
      event.preventDefault()

      const self = this
      let results = []

      return new Promise(resolve => {
        function testAmount() {
          const amount = self.userData.amount
          const validations = self.validations.amount

          // Required
          if (amount && amount > 0) {
            validations.required.valid = true
          } else {
            validations.required.valid = false
          }
        }

        function checkResults() {
          results = []

          Object.keys(self.validations).forEach(type => {
            const target = self.validations[type]

            Object.keys(target).forEach(param => {
              results.push(target[param].valid)
            })
          })
        }

        testAmount()
        checkResults()

        results.some(el => !el) ? resolve(false) : resolve(true)
      })
    },

    clearValidation(type) {
      const target = this.validations[type]

      Object.keys(target).forEach(key => {
        target[key].valid = true
      })
    },

    isInvalid(type) {
      const target = this.validations[type]
      const errors = []

      Object.keys(target).forEach(key => {
        errors.push(target[key].valid)
      })

      return errors.some(el => !el)
    },

    addWithdraw(event) {
      this.validateForm(event).then(result => {
        if (result) {
          this.$store.commit('withdraw/SAVE_NEW_WITHDRAWAL', this.userData)

          this.$router.push({ name: 'WithdrawConfirm' }).catch(err => {
            console.error(err)
          })
        }
      })
    },

    focusInput() {
      this.$nextTick()
        .then(() => {
          const input = this.$refs.withdrawAmount
          input.focus()
        })
    },

    withdrawAll() {
      this.userData.amount = this.user.withdrawable_balance
    },

    restrictAccess() {
      if (!this.user.payments) {
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

<style scoped lang="scss">
@import "../../styles/core/colors";

.withdraw-all {
  color: map-get($theme-colors, 'info');
  cursor: pointer;
  transition: .3s ease;

  &:hover {
    background: map-get($colors, 'grey');
  }
}
</style>
