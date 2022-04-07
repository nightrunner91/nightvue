<template>
  <div class="container">
    <div class="row">
      <div class="mb-1 col col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
        <app-wizard
          :steps="transferSteps"
          :currentStep="2" />
      </div>
      <div class="col col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-card>
          <form
            @submit="addTransfer($event)"
            novalidate="true"
            class="d-flex flex-column">
            <div class="position-relative">
              <router-link
                :to="{ name: 'TransferBeneficiary'}"
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
            <p class="text-center mb-3">How much you want to transfer?</p>
            <div class="input">
              <label
                for="amount"
                class="input__label">
                Enter Amount
              </label>
              <div class="input-group">
                <input
                  id="amount"
                  ref="transferAmount"
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
import { transferSteps } from '@/router/wizard'
import { eventBus } from '../../main'

export default {
  name: 'TransferAmount',
  data() {
    return {
      userData: {
        amount: undefined,
      },

      transferSteps: [],

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
  computed: {
    newTransfer() {
      return this.$store.state.transfer.newTransfer
    },

    user() {
      return this.$store.state.auth.user
    },
  },
  created() {
    this.transferSteps = transferSteps
  },
  mounted() {
    eventBus.$on('showToast/TransferAmount', data => { this.showToast(data) })

    this.restrictAccess()
    this.focusInput()
  },
  beforeDestroy() {
    eventBus.$off('showToast/TransferAmount')
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

    addTransfer(event) {
      this.validateForm(event).then(result => {
        if (result) {
          this.$store.commit('transfer/SAVE_NEW_TRANSFER', {
            amount: this.userData.amount,
          })

          this.$router.push({ name: 'TransferConfirm' }).catch(err => {
            console.error(err)
          })
        }
      })
    },

    focusInput() {
      this.$nextTick()
        .then(() => {
          const input = this.$refs.transferAmount
          input.focus()
        })
    },

    restrictAccess() {
      if (
        !this.user.payments ||
        this.newTransfer.company.length == 0 ||
        !this.newTransfer.id) {
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
