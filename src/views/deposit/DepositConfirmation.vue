<template>
  <div class="container">
    <div class="row">
      <div class="mb-1 col col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-wizard
          :steps="confirmationSteps"
          :currentStep="1" />
      </div>
      <div class="col col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12">
        <app-card>
          <form
            enctype="multipart/form-data"
            @submit="uploadConfirmation($event)"
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
              <h3 class="clr-primary text-center text-capitalize mb-1">
                {{ uploadData.title }} Confirmation
              </h3>
            </div>
            <p class="text-center mb-3">You need to send us Confirmation Receipt.</p>
            <div class="input">
              <label
                for="transaction_id"
                class="input__label">
                ID
              </label>
              <input
                disabled
                id="transaction_id"
                ref="transactionId"
                type="number"
                class="input__field input__field--medium"
                autocomplete="off"
                v-model="userData.id" />
            </div>

            <div class="input">
              <label
                for="amount"
                class="input__label">
                Confirmation Receipt
              </label>
              <input
                id="receipt"
                ref="receipt"
                type="file"
                class="input__field input__field--medium"
                @change="applyFiles"
                @click="clearValidation('file')" />
              <label
                for="receipt"
                class="input__upload"
                :class="isInvalid('file') ? 'input__upload--invalid' : null">
                <span
                  v-if="userData.file"
                  class="input__filename text-truncate maxw-50">
                  {{ userData.file.name }}
                </span>
                <span v-else>
                  Choose a file...
                </span>
              </label>
              <label
                v-waves
                for="amount"
                v-for="(error, index) in validations.file"
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
              Send
            </button>
          </form>
        </app-card>
      </div>
    </div>

    <app-preloader :show="uploadConfirmationResponse" />
  </div>
</template>

<script>
import { confirmationSteps } from '@/router/wizard'
import { eventBus } from '../../main'

export default {
  name: 'DepositConfirmation',
  data() {
    return {
      userData: {
        id: undefined,
        file: undefined,
      },

      confirmationSteps: [],

      validations: {
        file: {
          required: {
            valid: true,
            message: 'Confirmation Receipt field is required.',
          },
        },
      },
    }
  },
  computed: {
    uploadData() {
      return this.$store.state.deposit.uploadData
    },

    uploadConfirmationResponse() {
      return this.$store.state.deposit.responses.uploadConfirmation
    },
  },
  created() {
    this.confirmationSteps = confirmationSteps
  },
  mounted() {
    eventBus.$on('showToast/DepositConfirmation', data => { this.showToast(data) })

    this.redirectToDeposits()
    this.applyConfirmationId()
    this.applyPageTitle()
  },
  beforeDestroy() {
    eventBus.$off('showToast/DepositConfirmation')
  },
  methods: {
    validateForm(event) {
      event.preventDefault()

      const self = this
      let results = []

      return new Promise(resolve => {
        function testFile() {
          const fileInput = document.querySelector('#receipt')
          const validations = self.validations.file

          // Required
          if (fileInput.files.length > 0) {
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

        testFile()
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

    uploadConfirmation(event) {
      this.validateForm(event).then(result => {
        if (result) {
          // Back-end requires exactly this format of data 🤷‍♂️
          let formData = new FormData()

          formData.append('form[transaction_id]', this.userData.id)
          formData.append('file', this.userData.file)

          this.$store.dispatch('deposit/uploadConfirmation', formData)
        }
      })
    },

    redirectToDeposits() {
      if (this.uploadData.transactionId === undefined) {
        this.$router.push({ name: 'Deposit' }).catch(err => {
          console.error(err)
        })
      }
    },

    applyFiles(event) {
      this.userData.file = event.target.files[0]

      this.$store.commit('deposit/SAVE_UPLOAD_DATA', {
        type: 'fileName',
        data: event.target.files[0].name,
      })
    },

    applyConfirmationId() {
      this.userData.id = this.uploadData.transactionId
    },

    applyPageTitle() {
      // this will update title in wizard step
      // by default it's "Upload Confirmation"
      this.confirmationSteps[0].name = `${this.uploadData.title} Confirmation`
    },

    showToast(data) {
      this.$toast(data.message, {
        type: data.type
      })
    }
  }
}
</script>
