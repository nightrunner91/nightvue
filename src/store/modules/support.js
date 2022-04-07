import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { eventBus } from '../../main'

axios.defaults.withCredentials = true

Vue.use(Vuex)

let callSendTicket

export default {
  namespaced: true,
  state: {
    responses: {
      sendTicket: false,
    }
  },
  mutations: {
    SAVE_SETTINGS(state, data) {
      state.settings = data
    },

    SAVE_RESPONSE_STATE(state, { type, currState }) {
      state.responses[type] = currState
    },
  },
  actions: {
    sendTicket({ commit }, formData) {
      if (callSendTicket) {
        callSendTicket.cancel()
      }
      callSendTicket = axios.CancelToken.source()

      commit('SAVE_RESPONSE_STATE', {
        type: 'sendTicket',
        currState: true,
      })

      axios
        .post(
          process.env.VUE_APP_SUPPORT,
          formData,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            cancelToken: callSendTicket.token,
          },
        )

        .then(res => {
          const data = res.data

          if (data.errors.length === 0) {
            eventBus.$emit('showToast/Support', {
              message: 'BoTCoin Support Team will get back to you via e-mail within 24 hours.',
              type: 'success',
            })
          } else {
            for (let i = 0; i < data.errors.length; i++) {
              eventBus.$emit('showToast/Support', {
                message: data.errors[i],
                type: 'error',
              })
            }
          }

          commit('SAVE_RESPONSE_STATE', {
            type: 'sendTicket',
            currState: false,
          })
        })

        .catch(err => {
          console.error(err)

          if (!axios.isCancel(err)) {
            eventBus.$emit('showToast/Support', {
              message: 'Oops! Something went wrong',
              type: 'error',
            })
            commit('SAVE_RESPONSE_STATE', {
              type: 'sendTicket',
              currState: false,
            })
          } else {
            commit('SAVE_RESPONSE_STATE', {
              type: 'sendTicket',
              currState: true,
            })
          }
        })
    },
  },
}
