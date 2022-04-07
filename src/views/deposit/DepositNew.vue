<template>
  <div class="container">
    <div class="row">
      <div class="mb-1 col col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-wizard
          :steps="depositSteps"
          :currentStep="1" />
      </div>
      <div class="col col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-card>
          <form
            @submit="addDeposit($event)"
            novalidate="true"
            class="d-flex flex-column">
            <div class="position-relative">
              <router-link
                :to="{ name: 'Deposit'}"
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
            <p class="text-center mb-3">How much you want to deposit?</p>
            <div class="input">
              <label
                for="amount"
                class="input__label">
                Enter Amount
              </label>
              <div class="input-group">
                <input
                  id="amount"
                  ref="depositAmount"
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
              Submit
            </button>
          </form>
        </app-card>
      </div>
    </div>

    <app-preloader :show="newDepositResponse" />
  </div>
</template>

<script>
import { despositSteps } from '@/router/wizard'
import { eventBus } from '../../main'

export default {
  name: 'DepositNew',
  data() {
    return {
      userData: {
        amount: undefined,
      },

      depositSteps: [],

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
    newDepositResponse() {
      return this.$store.state.deposit.responses.newDeposit
    },
  },
  created() {
    this.depositSteps = despositSteps
  },
  mounted() {
    eventBus.$on('showToast/DepositNew', data => { this.showToast(data) })

    this.focusInput()
  },
  beforeDestroy() {
    eventBus.$off('showToast/DepositNew')
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

    addDeposit(event) {
      this.validateForm(event).then(result => {
        if (result) {
          // Back-end requires exactly this format of data 🤷‍♂️
          let formData = new FormData()

          formData.append('form[amount]', this.userData.amount)

          this.$store.dispatch('deposit/newDeposit', formData)
        }
      })
    },

    focusInput() {
      this.$nextTick()
        .then(() => {
          const input = this.$refs.depositAmount
          input.focus()
        })
    },

    showToast(data) {
      this.$toast(data.message, {
        type: data.type
      })
    }
  }
}
</script>
