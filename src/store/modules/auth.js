import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../../router'
import { eventBus } from '../../main'

Vue.use(Vuex)

axios.defaults.withCredentials = true

let callSignIn
let callVerifyCode
let callRestorePassword
let callConfirmPassword
let callChangePassword
let callLogOut

export default {
  namespaced: true,
  state: {
    user: {},

    routerData: {},

    responses: {
      signIn: false,
      verifyCode: false,
      restorePassword: false,
      confirmPassword: false,
      changePassword: false,
      logOut: false,
      checkLogin: false,
    },
  },
  mutations: {
    SAVE_USER(state, data) {
      state.user = data
    },

    SAVE_RESPONSE_STATE(state, { type, currState }) {
      state.responses[type] = currState
    },

    SAVE_ROUTER_DATA(state, data) {
      state.routerData = data
    },

    UPDATE_BALANCE(state, { type, data }) {
      state.user[type] = data
    },
  },
  actions: {
    signIn({ commit, dispatch }, params) {
      if (callSignIn) {
        callSignIn.cancel()
      }
      callSignIn = axios.CancelToken.source()

      commit('SAVE_RESPONSE_STATE', {
        type: 'signIn',
        currState: true,
      })

      axios
        .post(
          process.env.VUE_APP_LOGIN,
          params,
          {
            headers: {},
            cancelToken: callSignIn.token,
          },
        )

        .then(res => {
          const data = res.data

          if (data.errors.length === 0) {
            commit('SAVE_USER', data.member)

            if (data.member.first_login) {
              // todo: Redirect to /start
            }

            if (data.redirectToVerify) {
              router.push({ name: 'OtpVerification' }).catch(err => {
                console.error(err)
              })
            }

            dispatch('user/getSettings', null, { root: true })

            router.push({ name: 'Home' }).catch(err => {
              console.error(err)
            })
          } else {
            for (let i = 0; i < data.errors.length; i++) {
              eventBus.$emit('showToast/signIn', {
                message: data.errors[i],
                type: 'error',
              })
            }
          }

          commit('SAVE_RESPONSE_STATE', {
            type: 'signIn',
            currState: false,
          })
        })

        .catch(err => {
          console.error(err)

          if (!axios.isCancel(err)) {
            eventBus.$emit('showToast/signIn', {
              message: 'Oops! Something went wrong',
              type: 'error',
            })
            commit('SAVE_RESPONSE_STATE', {
              type: 'signIn',
              currState: false,
            })
          } else {
            commit('SAVE_RESPONSE_STATE', {
              type: 'signIn',
              currState: true,
            })
          }
        })
    },

    verifyCode({ commit }, params) {
      if (callVerifyCode) {
        callVerifyCode.cancel()
      }
      callVerifyCode = axios.CancelToken.source()

      commit('SAVE_RESPONSE_STATE', {
        type: 'verifyCode',
        currState: true,
      })

      axios
        .post(
          process.env.VUE_APP_VERIFY,
          params,
          {
            headers: {},
            cancelToken: callVerifyCode.token,
          },
        )

        .then(res => {
          const data = res.data

          if (data.errors.length === 0) {
            // do something...
          } else {
            for (let i = 0; i < data.errors.length; i++) {
              eventBus.$emit('showToast/OtpVerification', {
                message: data.errors[i],
                type: 'error',
              })
            }
          }

          commit('SAVE_RESPONSE_STATE', {
            type: 'verifyCode',
            currState: false,
          })
        })

        .catch(err => {
          console.error(err)

          if (!axios.isCancel(err)) {
            eventBus.$emit('showToast/OtpVerification', {
              message: 'Oops! Something went wrong',
              type: 'error',
            })
            commit('SAVE_RESPONSE_STATE', {
              type: 'verifyCode',
              currState: false,
            })
          } else {
            commit('SAVE_RESPONSE_STATE', {
              type: 'verifyCode',
              currState: true,
            })
          }
        })
    },

    restorePassword({ commit }, params) {
      if (callRestorePassword) {
        callRestorePassword.cancel()
      }
      callRestorePassword = axios.CancelToken.source()

      commit('SAVE_RESPONSE_STATE', {
        type: 'restorePassword',
        currState: true,
      })

      axios
        .post(
          process.env.VUE_APP_FORGOT,
          params,
          {
            headers: {},
            cancelToken: callRestorePassword.token,
          },
        )

        .then(res => {
          const data = res.data

          if (data.errors.length === 0) {
            eventBus.$emit('showToast/ForgotPassword', {
              message: 'Confirmation email sent. Check your inbox.',
              type: 'success',
            })
          } else {
            for (let i = 0; i < data.errors.length; i++) {
              eventBus.$emit('showToast/ForgotPassword', {
                message: data.errors[i],
                type: 'error',
              })
            }
          }

          commit('SAVE_RESPONSE_STATE', {
            type: 'restorePassword',
            currState: false,
          })
        })

        .catch(err => {
          console.error(err)

          if (!axios.isCancel(err)) {
            eventBus.$emit('showToast/ForgotPassword', {
              message: 'Oops! Something went wrong',
              type: 'error',
            })
            commit('SAVE_RESPONSE_STATE', {
              type: 'restorePassword',
              currState: false,
            })
          } else {
            commit('SAVE_RESPONSE_STATE', {
              type: 'restorePassword',
              currState: true,
            })
          }
        })
    },

    confirmPassword({ commit }, { formData, routerData }) {
      if (callConfirmPassword) {
        callConfirmPassword.cancel()
      }
      callConfirmPassword = axios.CancelToken.source()

      commit('SAVE_RESPONSE_STATE', {
        type: 'confirmPassword',
        currState: true,
      })

      axios
        .post(
          process.env.VUE_APP_PASS_CONFIRM,
          formData,
          {
            headers: {},
            cancelToken: callConfirmPassword.token,
          },
        )

        .then(res => {
          const data = res.data

          if (data.errors.length === 0) {
            router.push({ name: 'PasswordChange' })
            .then(() => {
              commit('SAVE_ROUTER_DATA', routerData)
            })
            .catch(err => {
              console.error(err)
            })
          } else {
            for (let i = 0; i < data.errors.length; i++) {
              eventBus.$emit('showToast/PasswordConfirm', {
                message: data.errors[i],
                type: 'error',
              })
            }
          }

          commit('SAVE_RESPONSE_STATE', {
            type: 'confirmPassword',
            currState: false,
          })
        })

        .catch(err => {
          console.error(err)

          if (!axios.isCancel(err)) {
            eventBus.$emit('showToast/PasswordConfirm', {
              message: 'Oops! Something went wrong',
              type: 'error',
            })
            commit('SAVE_RESPONSE_STATE', {
              type: 'confirmPassword',
              currState: false,
            })
          } else {
            commit('SAVE_RESPONSE_STATE', {
              type: 'confirmPassword',
              currState: true,
            })
          }
        })
    },

    changePassword({ commit }, params) {
      if (callChangePassword) {
        callChangePassword.cancel()
      }
      callChangePassword = axios.CancelToken.source()

      commit('SAVE_RESPONSE_STATE', {
        type: 'changePassword',
        currState: true,
      })

      axios
        .post(
          process.env.VUE_APP_PASS_CHANGE,
          params,
          {
            headers: {},
            cancelToken: callChangePassword.token,
          },
        )

        .then(res => {
          const data = res.data

          if (data.errors.length === 0) {
            router.push({ name: 'SignIn' }).catch(err => {
              console.error(err)
            })
          } else {
            for (let i = 0; i < data.errors.length; i++) {
              eventBus.$emit('showToast/PasswordChange', {
                message: data.errors[i],
                type: 'error',
              })
            }
          }

          commit('SAVE_RESPONSE_STATE', {
            type: 'changePassword',
            currState: false,
          })
        })

        .catch(err => {
          console.error(err)

          if (!axios.isCancel(err)) {
            eventBus.$emit('showToast/PasswordChange', {
              message: 'Oops! Something went wrong',
              type: 'error',
            })
            commit('SAVE_RESPONSE_STATE', {
              type: 'changePassword',
              currState: false,
            })
          } else {
            commit('SAVE_RESPONSE_STATE', {
              type: 'changePassword',
              currState: true,
            })
          }
        })
    },

    logOut({ commit }) {
      if (callLogOut) {
        callLogOut.cancel()
      }
      callLogOut = axios.CancelToken.source()

      commit('SAVE_RESPONSE_STATE', {
        type: 'logOut',
        currState: true,
      })

      axios
        .get(
          process.env.VUE_APP_LOGOUT,
          {
            headers: {},
            cancelToken: callLogOut.token,
          },
        )

        .then(res => {
          const data = res.data

          if (data.errors.length === 0) {
            commit('SAVE_USER', {})
            commit('user/SAVE_SETTINGS', {}, { root: true })

            router.push({ name: 'SignIn' }).catch(err => {
              console.error(err)
            })
          } else {
            for (let i = 0; i < data.errors.length; i++) {
              eventBus.$emit('showToast', {
                message: data.errors[i],
                type: 'error',
              })
            }
          }

          commit('SAVE_RESPONSE_STATE', {
            type: 'logOut',
            currState: false,
          })
        })

        .catch(err => {
          console.error(err)

          if (!axios.isCancel(err)) {
            eventBus.$emit('showToast', {
              message: 'Oops! Something went wrong',
              type: 'error',
            })
            commit('SAVE_RESPONSE_STATE', {
              type: 'logOut',
              currState: false,
            })
          } else {
            commit('SAVE_RESPONSE_STATE', {
              type: 'logOut',
              currState: true,
            })
          }
        })
    },

    checkLogin({ commit }) {
      commit('SAVE_RESPONSE_STATE', {
        type: 'checkLogin',
        currState: true,
      })

      axios
        .get(`${process.env.VUE_APP_LOGIN}?json=1`)

        .then(res => {
          const data = res.data

          if (data.redirectToVerify) {
            router.push({ name: 'OtpVerification' }).catch(err => {
              console.error(err)
            })
          }

          if (data.showLogin) {
            router.push({ name: 'SignIn' }).catch(err => {
              console.error(err)
            })
          }

          if (data.errors.length === 0) {
            commit('SAVE_USER', data.member)
          }

          commit('SAVE_RESPONSE_STATE', {
            type: 'checkLogin',
            currState: false,
          })
        })

        .catch(err => {
          console.error(err)

          commit('SAVE_RESPONSE_STATE', {
            type: 'checkLogin',
            currState: false,
          })

          eventBus.$emit('showToast', {
            message: 'Oops! Something went wrong',
            type: 'error',
          })
        })
    },
  },
}
