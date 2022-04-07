import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../../router'
import { eventBus } from '../../main'

Vue.use(Vuex)

axios.defaults.withCredentials = true

let callNewReceive

export default {
  namespaced: true,
  state: {
    receives: {
      outgoing: {
        records: [],
        stats: {
          total: undefined,
          next: 0,
        }
      },

      incoming: {
        records: [],
        stats: {
          total: undefined,
          next: 0,
        }
      },
    },

    newReceive: {
      id: undefined,
      company: '',
      fullname: '',
      amount: 0,
      feeType: 0,
      feeTitle: undefined,
      feeValue: undefined,
      reference: '',
    },

    uploadData: {},

    responses: {
      outgoingReceive: false,
      incomingReceive: false,
      newReceive: false,
    }
  },
  mutations: {
    SAVE_RECEIVES(state, { type, data }) {
      for (let i = 0; i < data.length; i++) {
        state.receives[type].records.push(data[i])
      }
    },

    CLEAR_RECEIVES(state, type) {
      state.receives[type].records = []
    },

    SAVE_RECEIVES_STATS(state, { type, total, next }) {
      state.receives[type].stats.total = total
      state.receives[type].stats.next = next
    },

    SAVE_NEW_RECEIVE(state, data) {
      Object.keys(data).forEach(key => {
        state.newReceive[key] = data[key]
      })
    },

    SAVE_UPLOAD_DATA(state, data) {
      state.uploadData = data.transaction
      state.uploadData.balance = data.balance
    },

    CLEAR_UPLOAD_DATA(state) {
      state.uploadData = {}
    },

    SAVE_RESPONSE_STATE(state, { type, currState }) {
      state.responses[`${type}Receive`] = currState
    },
  },
  actions: {
    getReceives({ commit }, { type, startFrom }) {
      commit('SAVE_RESPONSE_STATE', {
        type: type,
        currState: true,
      })

      const apiLinks = {
        outgoing: process.env.VUE_APP_OUTGOING_RECEIVES,
        incoming: process.env.VUE_APP_INCOMING_RECEIVES,
      }

      axios
        .get(`${apiLinks[type]}?start=${startFrom}`)

        .then(res => {
          const data = res.data

          if (data.errors.length === 0) {
            commit('SAVE_RECEIVES', {
              type: type,
              data: data.records
            })
            commit('SAVE_RECEIVES_STATS', {
              type: type,
              total: data.totals,
              next: data.next
            })
          } else {
            for (let i = 0; i < data.errors.length; i++) {
              eventBus.$emit('showToast/ReceiveList', {
                message: data.errors[i],
                type: 'error',
              })
            }
          }

          commit('SAVE_RESPONSE_STATE', {
            type: type,
            currState: false,
          })
        })

        .catch(err => {
          console.error(err)

          eventBus.$emit('showToast/ReceiveList', {
            message: 'Oops! Something went wrong',
            type: 'error',
          })

          commit('SAVE_RESPONSE_STATE', {
            type: type,
            currState: false,
          })
        })
    },

    newReceive({ commit }, params) {
      if (callNewReceive) {
        callNewReceive.cancel()
      }
      callNewReceive = axios.CancelToken.source()

      commit('SAVE_RESPONSE_STATE', {
        type: 'new',
        currState: true,
      })

      axios
        .post(
          process.env.VUE_APP_NEW_RECEIVE,
          params,
          {
            headers: {},
            cancelToken: callNewReceive.token,
          },
        )

        .then(res => {
          const data = res.data

          if (data.errors.length === 0) {
            commit('SAVE_UPLOAD_DATA', data)

            router.push({ name: 'ReceiveSuccess' }).catch(err => {
              console.error(err)
            })
          } else {
            for (let i = 0; i < data.errors.length; i++) {
              eventBus.$emit('showToast/ReceiveConfirm', {
                message: data.errors[i],
                type: 'error',
              })
            }
          }

          commit('SAVE_RESPONSE_STATE', {
            type: 'new',
            currState: false,
          })
        })

        .catch(err => {
          console.error(err)

          if (!axios.isCancel(err)) {
            eventBus.$emit('showToast/ReceiveConfirm', {
              message: 'Oops! Something went wrong',
              type: 'error',
            })
            commit('SAVE_RESPONSE_STATE', {
              type: 'new',
              currState: false,
            })
          } else {
            commit('SAVE_RESPONSE_STATE', {
              type: 'new',
              currState: true,
            })
          }
        })
    },

    clearReceives({ commit }, type) {
      commit('CLEAR_RECEIVES', type)
      commit('SAVE_RECEIVES_STATS', {
        type: type,
        total: undefined,
        next: 0
      })
    }
  },
}
