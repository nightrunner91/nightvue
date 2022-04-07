<template>
  <div class="container">
    <div class="row">
      <div class="col col-lg-6 offset-lg-3">

        <app-card v-if="this.settings !== undefined">
          <form
            @submit="sendTicket($event)"
            novalidate="true"
            class="d-flex flex-column">

            <div class="input">
              <label
                for="name"
                class="input__label">
                <span>Name</span>
                <sup class="ml-25">
                  <i class="fas fa-asterisk fa-xs opacity-75" />
                </sup>
              </label>
              <input
                id="name"
                type="text"
                class="input__field input__field--medium"
                :class="isInvalid('name') ? 'input__field--invalid' : null"
                placeholder="How can we call you?"
                autocomplete="off"
                v-model="userData.name"
                @input="clearValidation('name')" />
              <label
                for="name"
                v-for="(error, index) in validations.name"
                :key="`name-error-${index}`"
                v-show="!error.valid"
                class="input__error">
                <i class="fas fa-exclamation-triangle mr-50" />
                <span>{{ error.message }}</span>
              </label>
            </div>

            <div class="input">
              <label
                for="email"
                class="input__label">
                <span>Email</span>
                <sup class="ml-25">
                  <i class="fas fa-asterisk fa-xs opacity-75" />
                </sup>
              </label>
              <input
                id="email"
                type="email"
                class="input__field input__field--medium"
                :class="isInvalid('email') ? 'input__field--invalid' : null"
                placeholder="john@example.com"
                autocomplete="off"
                v-model="userData.email"
                @input="clearValidation('email')" />
              <label
                for="email"
                v-for="(error, index) in validations.email"
                :key="`email-error-${index}`"
                v-show="!error.valid"
                class="input__error">
                <i class="fas fa-exclamation-triangle mr-50" />
                <span>{{ error.message }}</span>
              </label>
            </div>

            <div class="input">
              <label
                for="subject"
                class="input__label">
                Subject
              </label>
              <input
                id="subject"
                ref="subject"
                type="text"
                class="input__field input__field--medium"
                placeholder="What is the problem?"
                autocomplete="off"
                v-model="userData.subject" />
            </div>

            <div class="input">
              <label
                for="message"
                class="input__label d-flex align-items-center flex-wrap">
                <span>Message</span>
                <sup class="ml-25">
                  <i class="fas fa-asterisk fa-xs opacity-75" />
                </sup>
              </label>
              <textarea
                name="message"
                ref="message"
                id="message"
                rows="10"
                data-type="textarea"
                class="input__field"
                :class="isInvalid('message') ? 'input__field--invalid' : null"
                placeholder="Please describe your problem..."
                v-model="userData.message"
                @input="clearValidation('message')" />
              <label
                for="message"
                v-for="(error, index) in validations.message"
                :key="`message-error-${index}`"
                v-show="!error.valid"
                class="input__error">
                <i class="fas fa-exclamation-triangle mr-50" />
                <span>{{ error.message }}</span>
              </label>
            </div>

            <!--
            * Might be usefull in future *

            <div class="input">
              <label
                for="amount"
                class="input__label">
                Attach File
              </label>
              <input
                id="file"
                ref="file"
                type="file"
                class="input__field input__field--medium"
                @change="applyFiles" />
              <label
                for="file"
                class="input__upload">
                <span
                  v-if="userData.file"
                  class="input__filename text-truncate maxw-50">
                  {{ userData.file.name }}
                </span>
                <span v-else>
                  Choose a file...
                </span>
              </label>
            </div>
            -->

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

    <app-preloader :show="sendTicketResponse" />
  </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
  name: 'Support',
  data() {
    return {
      userData: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      validations: {
        name: {
          required: {
            valid: true,
            message: 'Name field is required.',
          },
        },
        email: {
          required: {
            valid: true,
            message: 'Email field is required.',
          },
          regex: {
            valid: true,
            message: 'Please enter a valid email address',
          },
        },
        message: {
          required: {
            valid: true,
            message: 'Message field is required.',
          },
        },
      },
    }
  },
  filters: {

  },
  computed: {
    sendTicketResponse() {
      return this.$store.state.support.responses.sendTicket
    },

    user() {
      return this.$store.state.auth.user
    },

    settings() {
      return this.$store.state.user.settings
    },
  },
  mounted() {
    eventBus.$on('showToast/Support', data => { this.showToast(data) })

    this.prefillInputs()
    this.focusInput()
  },
  beforeDestroy() {
    eventBus.$off('showToast/Support')
  },
  methods: {
    validateForm(event) {
      event.preventDefault()

      const self = this
      let results = []

      return new Promise(resolve => {
        function testName() {
          const name = self.userData.name
          const validations = self.validations.name

          // Required
          if (name.length === 0) {
            validations.required.valid = false
          } else {
            validations.required.valid = true
          }
        }

        function testEmail() {
          const email = self.userData.email
          const validations = self.validations.email

          // Required
          if (email.length === 0) {
            validations.required.valid = false
          } else {
            validations.required.valid = true
          }

          // Regex
          let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
          let ex = re.test(email)

          if (!ex && email.length > 0) {
            validations.regex.valid = false
          } else {
            validations.regex.valid = true
          }
        }

        function testMessage() {
          const message = self.userData.message
          const validations = self.validations.message

          // Required
          if (message.length === 0) {
            validations.required.valid = false
          } else {
            validations.required.valid = true
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

        testName()
        testEmail()
        testMessage()
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

    sendTicket(event) {
      this.validateForm(event).then(result => {
        if (result) {
          // Back-end requires exactly this format of data 🤷‍♂️
          let formData = new FormData()

          formData.append('json', 1)
          formData.append('form[name]', this.userData.name)
          formData.append('form[email]', this.userData.email)
          formData.append('form[subject]', this.userData.subject)
          // formData.append('form[subject]', this.userData.subject)
          formData.append('form[message]', this.userData.message)
          // formData.append('file', this.userData.file)

          this.$store.dispatch('support/sendTicket', formData)
        }
      })
    },

    applyFiles(event) {
      this.userData.file = event.target.files[0]
    },

    prefillInputs() {
      setTimeout(() => {
        this.userData.name = this.settings.account.firstname
        this.userData.email = this.settings.account.email
      }, 100)
    },

    focusInput() {
      this.$nextTick()
        .then(() => {
          const input = this.$refs.subject
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
