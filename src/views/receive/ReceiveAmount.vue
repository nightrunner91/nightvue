<template>
  <div class="container">
    <div class="row">
      <div class="mb-1 col col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
        <app-wizard
          :steps="receiveSteps"
          :currentStep="2" />
      </div>
      <div class="col col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-card>
          <form
            @submit="addReceive($event)"
            novalidate="true"
            class="d-flex flex-column">
            <div class="position-relative">
              <router-link
                :to="{ name: 'ReceiveBeneficiary'}"
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
            <p class="text-center mb-3">How much you want to request?</p>
            <div class="input">
              <label
                for="amount"
                class="input__label">
                Enter Amount
              </label>
              <div class="input-group">
                <input
                  id="amount"
                  ref="receiveAmount"
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
              <label class="input__label mb-75">
                Select Fee Payment Method
              </label>
              <div
                v-for="fee in feeTypes"
                :key="`fee-${fee.type}`"
                class="radio"
                @click="saveFee(fee.type, fee.title, fee.value)">
                <input
                  type="radio"
                  :id="`fee-${fee.type}`"
                  name="feeType"
                  :value="fee.type"
                  class="radio__input"
                  v-model.number="userData.feeType" />
                <label
                  :for="`fee-${fee.type}`"
                  class="radio__label">
                  <span>{{ fee.title }}</span>
                  <span
                    class="ml-auto font-weight-500 opacity-40 fee-value"
                    :class="{ 'opacity-100 clr-primary' : userData.feeType == fee.type }">
                    <span v-if="fee.type < 2">+</span>
                    ${{ fee.value | truncateFee }}
                  </span>
                </label>
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
import { receiveSteps } from '@/router/wizard'
import { eventBus } from '../../main'

export default {
  name: 'ReceiveAmount',
  data() {
    return {
      userData: {
        amount: undefined,
        feeType: 0,
        feeTitle: undefined,
        feeValue: undefined,
      },

      receiveSteps: [],

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
    truncateFee(value) {
      const testVal = value !== undefined && value !== null && typeof value === 'number'

      return testVal ? value.toFixed(2) : 0
    }
  },
  computed: {
    newReceive() {
      return this.$store.state.receive.newReceive
    },

    user() {
      return this.$store.state.auth.user
    },

    feeTypes() {
      return [
        {
          type: 0,
          title: 'Paid by Payee',
          value: this.user.fees.payment,
          default: true,
        },
        {
          type: 1,
          title: '50% / 50%',
          value: this.user.fees.payment / 2,
          default: false,
        },
        {
          type: 2,
          title: 'Paid by Payer',
          value: 0,
          default: false,
        },
      ]
    },
  },
  created() {
    this.receiveSteps = receiveSteps
  },
  mounted() {
    eventBus.$on('showToast/ReceiveAmount', data => { this.showToast(data) })

    this.restrictAccess()
    this.focusInput()
    this.preselectFee()
  },
  beforeDestroy() {
    eventBus.$off('showToast/ReceiveAmount')
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

    saveFee(type, title, value) {
      this.userData.feeType = type
      this.userData.feeTitle = title
      this.userData.feeValue = value
    },

    preselectFee() {
      const defaultFee = this.feeTypes.filter(item => item.default)[0]

      this.saveFee(defaultFee.type, defaultFee.title, defaultFee.value)
    },

    addReceive(event) {
      this.validateForm(event).then(result => {
        if (result) {
          this.$store.commit('receive/SAVE_NEW_RECEIVE', {
            amount: this.userData.amount,
            feeValue: this.userData.feeValue,
            feeType: this.userData.feeType,
            feeTitle: this.userData.feeTitle,
          })

          this.$router.push({ name: 'ReceiveConfirm' }).catch(err => {
            console.error(err)
          })
        }
      })
    },

    focusInput() {
      this.$nextTick()
        .then(() => {
          const input = this.$refs.receiveAmount
          input.focus()
        })
    },

    restrictAccess() {
      if (
        !this.user.payments ||
        this.newReceive.company.length == 0 ||
        !this.newReceive.id) {
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

<style lang="scss">
.fee-value {
  transition: .3s ease;
}
</style>
