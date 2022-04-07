import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../../router'
import { eventBus } from '../../main'

Vue.use(Vuex)

axios.defaults.withCredentials = true

let callNewWithdrawal

export default {
  namespaced: true,
  state: {
    recentWithdrawals: [],
    newWithdrawal: {},
    withdrawalConfirmation: {},
    withdrawalsLength: {
      total: undefined,
      next: 0,
    },
    uploadData: {},

    responses: {
      recentWithdrawals: false,
      newWithdrawal: false,
    }
  },
  mutations: {
    SAVE_RECENT_WITHDRAWALS(state, data) {
      for (let i = 0; i < data.length; i++) {
        state.recentWithdrawals.push(data[i])
      }
    },

    CLEAR_RECENT_WITHDRAWALS(state) {
      state.recentWithdrawals = []
    },

    SAVE_WITHDRAWALS_LENGTH(state, { total, next }) {
      state.withdrawalsLength.total = total
      state.withdrawalsLength.next = next
    },

    SAVE_RESPONSE_STATE(state, { type, currState }) {
      state.responses[type] = currState
    },

    SAVE_NEW_WITHDRAWAL(state, data) {
      state.newWithdrawal = data
    },

    SAVE_UPLOAD_DATA(state, data) {
      state.uploadData = data.transaction
      state.uploadData.balance = data.balance
      state.uploadData.withdrawable_balance = data.withdrawable_balance
    },

    CLEAR_UPLOAD_DATA(state) {
      state.uploadData = {}
    },
  },
  actions: {
    getRecentWithdrawals({ commit }, { startFrom }) {
      commit('SAVE_RESPONSE_STATE', {
        type: 'recentWithdrawals',
        currState: true,
      })

      axios
        .get(`${process.env.VUE_APP_RECENT_WITHDRAWALS}?start=${startFrom}`)

        .then(res => {
          const data = res.data

          if (data.errors.length === 0) {
            commit('SAVE_RECENT_WITHDRAWALS', data.records)
            commit('SAVE_WITHDRAWALS_LENGTH', {
              total: data.totals,
              next: data.next
            })
          } else {
            for (let i = 0; i < data.errors.length; i++) {
              eventBus.$emit('showToast/WithdrawList', {
                message: data.errors[i],
                type: 'error',
              })
            }
          }

          commit('SAVE_RESPONSE_STATE', {
            type: 'recentWithdrawals',
            currState: false,
          })
        })

        .catch(err => {
          console.error(err)

          eventBus.$emit('showToast/WithdrawList', {
            message: 'Oops! Something went wrong',
            type: 'error',
          })

          commit('SAVE_RESPONSE_STATE', {
            type: 'recentWithdrawals',
            currState: false,
          })
        })
    },

    newWithdrawal({ commit }, params) {
      if (callNewWithdrawal) {
        callNewWithdrawal.cancel()
      }
      callNewWithdrawal = axios.CancelToken.source()

      commit('SAVE_RESPONSE_STATE', {
        type: 'newWithdrawal',
        currState: true,
      })

      axios
        .post(
          process.env.VUE_APP_NEW_WITHDRAWAL,
          params,
          {
            headers: {},
            cancelToken: callNewWithdrawal.token,
          },
        )

        .then(res => {
          const data = res.data

          if (data.errors.length === 0) {
            commit('SAVE_UPLOAD_DATA', data)
            commit('auth/UPDATE_BALANCE',
              {
                type: 'balance',
                data: data.balance
              },
              { root: true }
            )
            commit('auth/UPDATE_BALANCE',
              {
                type: 'withdrawable_balance',
                data: data.withdrawable_balance
              },
              { root: true }
            )

            router.push({ name: 'WithdrawSuccess' }).catch(err => {
              console.error(err)
            })
          } else {
            for (let i = 0; i < data.errors.length; i++) {
              eventBus.$emit('showToast/WithdrawConfirm', {
                message: data.errors[i],
                type: 'error',
              })
            }
          }

          commit('SAVE_RESPONSE_STATE', {
            type: 'newWithdrawal',
            currState: false,
          })
        })

        .catch(err => {
          console.error(err)

          if (!axios.isCancel(err)) {
            eventBus.$emit('showToast/WithdrawConfirm', {
              message: 'Oops! Something went wrong',
              type: 'error',
            })
            commit('SAVE_RESPONSE_STATE', {
              type: 'newWithdrawal',
              currState: false,
            })
          } else {
            commit('SAVE_RESPONSE_STATE', {
              type: 'newWithdrawal',
              currState: true,
            })
          }
        })
    },

    clearRecentWithdrawals({ commit }) {
      commit('CLEAR_RECENT_WITHDRAWALS')
      commit('SAVE_WITHDRAWALS_LENGTH', {
        total: undefined,
        next: 0
      })
    }
  },
}
