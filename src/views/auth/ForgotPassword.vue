<template>
  <main class="container container--full">
    <div class="row">
      <div class="col col-lg-5 col-md-5 d-none d-md-block layout__left-bg minvh-100" />

      <div class="col col-lg-7 col-md-7 cols-12 minvh-100 d-flex flex-column justify-content-between">
        <div class="d-flex justify-content-end pt-1">
          <router-link
            :to="{ name: 'SignIn'}"
            tag="a"
            v-waves
            class="btn btn-primary-flat btn-small mr-auto">
            <i class="fas fa-chevron-left mr-50"></i>
            <span>Back</span>
          </router-link>
          <a
            href="https://www.botcoin.mt/register/"
            target="_blank"
            v-waves
            class="btn btn-primary-outline btn-small mr-1">
            <i class="fas fa-user-plus mr-50"></i>
            <span>Register</span>
          </a>
          <router-link
            :to="{ name: 'SignIn'}"
            tag="a"
            v-waves
            class="btn btn-primary btn-small">
            <i class="fas fa-key mr-50" />
            <span>Sign In</span>
          </router-link>
        </div>

        <div class="row">
          <div class="col col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-6 offset-sm-3 col-xs-10 offset-xs-1">

            <form
              @submit="restorePassword($event)"
              novalidate="true"
              class="d-flex flex-column pb-1">

              <div class="mb-1 text-center">
                <h3 class="text-uppercase">
                  Password Recovery
                </h3>
                <p>Please enter your email address.</p>
              </div>

              <div class="input">
                <label
                  for="email"
                  class="input__label">
                  Email
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

              <button
                type="submit"
                v-waves
                class="btn btn-medium btn-primary btn-block">
                Submit
              </button>
            </form>

          </div>
        </div>

        <div /> <!-- ! spacer for flex-column -->
      </div>
    </div>

    <app-preloader :show="restorePasswordResponse" />
  </main>
</template>

<script>
import { eventBus } from '../../main'

export default {
  name: 'ForgotPassword',
  data() {
    return {
      userData: {
        email: '',
      },
      validations: {
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
      },
    }
  },
  computed: {
    restorePasswordResponse() {
      return this.$store.state.auth.responses.restorePassword
    },
  },
  mounted() {
    eventBus.$on('showToast/ForgotPassword', data => { this.showToast(data) })
  },
  beforeDestroy() {
    eventBus.$off('showToast/ForgotPassword')
  },
  methods: {
    validateForm(event) {
      event.preventDefault()

      const self = this
      let results = []

      return new Promise(resolve => {
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

        function checkResults() {
          results = []

          Object.keys(self.validations).forEach(type => {
            const target = self.validations[type]

            Object.keys(target).forEach(param => {
              results.push(target[param].valid)
            })
          })
        }

        testEmail()
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

    restorePassword(event) {
      this.validateForm(event).then(result => {
        if (result) {
          // Back-end requires exactly this format of data 🤷‍♂️
          let formData = new FormData()

          formData.append('json', 1)
          formData.append('login[email]', this.userData.email)

          this.$store.dispatch('auth/restorePassword', formData)
        }
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
