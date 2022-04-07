import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../../router'
import { eventBus } from '../../main'

Vue.use(Vuex)

axios.defaults.withCredentials = true

let callNewDeposit
let callUploadConfirmation

export default {
  namespaced: true,
  state: {
    newDeposit: {},
    recentDeposits: [],
    invoices: [],

    invoicesLength: {
      total: undefined,
      next: 0,
    },

    uploadData: {
      amount: undefined,
      balance_after: undefined,
      fileName: undefined,
      transactionId: undefined,
      title: undefined,
    },

    responses: {
      newDeposit: false,
      recentDeposits: false,
      invoices: false,
      uploadConfirmation: false,
    }
  },
  mutations: {
    SAVE_NEW_DEPOSIT(state, data) {
      state.newDeposit = data
    },

    SAVE_RECENT_DEPOSITS(state, data) {
      state.recentDeposits = data
    },

    SAVE_INVOICES(state, data) {
      for (let i = 0; i < data.length; i++) {
        state.invoices.push(data[i])
      }
    },

    CLEAR_INVOICES(state) {
      state.invoices = []
    },

    SAVE_INVOICES_LENGTH(state, { total, next }) {
      state.invoicesLength.total = total
      state.invoicesLength.next = next
    },

    SAVE_RESPONSE_STATE(state, { type, currState }) {
      state.responses[type] = currState
    },

    SAVE_UPLOAD_DATA(state, { type, data }) {
      state.uploadData[type] = data
    },
  },
  actions: {
    newDeposit({ commit }, params) {
      if (callNewDeposit) {
        callNewDeposit.cancel()
      }
      callNewDeposit = axios.CancelToken.source()

      commit('SAVE_RESPONSE_STATE', {
        type: 'newDeposit',
        currState: true,
      })

      axios
        .post(
          process.env.VUE_APP_NEW_DEPOSIT,
          params,
          {
            headers: {},
            cancelToken: callNewDeposit.token,
          },
        )

        .then(res => {
          const data = res.data

          if (data.errors.length === 0) {
            commit('SAVE_NEW_DEPOSIT', data.transaction)

            router.push({ name: 'DepositInstructions' }).catch(err => {
              console.error(err)
            })
          } else {
            for (let i = 0; i < data.errors.length; i++) {
              eventBus.$emit('showToast/DepositNew', {
                message: data.errors[i],
                type: 'error',
              })
            }
          }

          commit('SAVE_RESPONSE_STATE', {
            type: 'newDeposit',
            currState: false,
          })
        })

        .catch(err => {
          console.error(err)

          if (!axios.isCancel(err)) {
            eventBus.$emit('showToast/DepositNew', {
              message: 'Oops! Something went wrong',
              type: 'error',
            })
            commit('SAVE_RESPONSE_STATE', {
              type: 'newDeposit',
              currState: false,
            })
          } else {
            commit('SAVE_RESPONSE_STATE', {
              type: 'newDeposit',
              currState: true,
            })
          }
        })
    },

    getRecentDeposits({ commit }) {
      commit('SAVE_RESPONSE_STATE', {
        type: 'recentDeposits',
        currState: true,
      })

      axios
        .get(process.env.VUE_APP_RECENT_DEPOSITS)

        .then(res => {
          const data = res.data

          if (data.errors.length === 0) {
            commit('SAVE_RECENT_DEPOSITS', data.records)
          } else {
            for (let i = 0; i < data.errors.length; i++) {
              eventBus.$emit('showToast/DepositList', {
                message: data.errors[i],
                type: 'error',
              })
            }
          }

          commit('SAVE_RESPONSE_STATE', {
            type: 'recentDeposits',
            currState: false,
          })
        })

        .catch(err => {
          console.error(err)

          eventBus.$emit('showToast/DepositList', {
            message: 'Oops! Something went wrong',
            type: 'error',
          })

          commit('SAVE_RESPONSE_STATE', {
            type: 'recentDeposits',
            currState: false,
          })
        })
    },

    getInvoices({ commit }, { startFrom }) {
      commit('SAVE_RESPONSE_STATE', {
        type: 'invoices',
        currState: true,
      })

      axios
      .get(`${process.env.VUE_APP_INVOICES}?start=${startFrom}`)

        .then(res => {
          const data = res.data

          if (data.errors.length === 0) {
            commit('SAVE_INVOICES', data.records)
            commit('SAVE_INVOICES_LENGTH', {
              total: data.totals,
              next: data.next
            })
          }

          commit('SAVE_RESPONSE_STATE', {
            type: 'invoices',
            currState: false,
          })
        })

        .catch(err => {
          console.error(err)

          commit('SAVE_RESPONSE_STATE', {
            type: 'invoices',
            currState: false,
          })
        })
    },

    sendToConfirmation({ commit }, { id, title }) {
      if (id) {
        commit('SAVE_UPLOAD_DATA', {
          type: 'transactionId',
          data: id,
        })

        commit('SAVE_UPLOAD_DATA', {
          type: 'title',
          data: title,
        })

        router.push({ name: 'DepositConfirmation' }).catch(err => {
          console.error(err)

          eventBus.$emit('showToast/DepositList', {
            message: 'Oops! Something went wrong',
            type: 'error',
          })
        })
      } else {
        eventBus.$emit('showToast/DepositList', {
          message: 'Oops! Something went wrong',
          type: 'error',
        })
      }
    },

    uploadConfirmation({ commit }, media) {
      if (callUploadConfirmation) {
        callUploadConfirmation.cancel()
      }
      callUploadConfirmation = axios.CancelToken.source()

      commit('SAVE_RESPONSE_STATE', {
        type: 'uploadConfirmation',
        currState: true,
      })

      axios
        .post(
          process.env.VUE_APP_UPLOAD_CONFIRMATION,
          media,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            cancelToken: callUploadConfirmation.token,
          },
        )

        .then(res => {
          const data = res.data

          if (data.errors.length === 0) {
            Object.keys(data.details).forEach(key => {
              commit('SAVE_UPLOAD_DATA', {
                type: key,
                data: data.details[key],
              })
            })

            router.push({ name: 'DepositSuccess' }).catch(err => {
              console.error(err)
            })
          } else {
            for (let i = 0; i < data.errors.length; i++) {
              eventBus.$emit('showToast/DepositConfirmation', {
                message: data.errors[i],
                type: 'error',
              })
            }
          }

          commit('SAVE_RESPONSE_STATE', {
            type: 'uploadConfirmation',
            currState: false,
          })
        })

        .catch(err => {
          console.error(err)

          if (!axios.isCancel(err)) {
            eventBus.$emit('showToast/DepositConfirmation', {
              message: 'Oops! Something went wrong',
              type: 'error',
            })
            commit('SAVE_RESPONSE_STATE', {
              type: 'uploadConfirmation',
              currState: false,
            })
          } else {
            commit('SAVE_RESPONSE_STATE', {
              type: 'uploadConfirmation',
              currState: true,
            })
          }
        })
    },

    clearDeposits({ commit }) {
      commit('SAVE_RECENT_DEPOSITS', [])
      commit('CLEAR_INVOICES')
      commit('SAVE_INVOICES_LENGTH', {
        total: undefined,
        next: 0
      })
    }
  },
}
