import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { eventBus } from '../../main'

Vue.use(Vuex)

axios.defaults.withCredentials = true

let callSearchMembers

export default {
  namespaced: true,
  state: {
    foundMembers: [],

    responses: {
      searchMembers: false,
    }
  },
  mutations: {
    SAVE_SEARCH_RESULTS(state, data) {
      state.foundMembers = data
    },

    SAVE_RESPONSE_STATE(state, { type, currState }) {
      state.responses[type] = currState
    },
  },
  actions: {
    searchMembers({ commit }, query) {
      if (callSearchMembers) {
        callSearchMembers.cancel()
      }
      callSearchMembers = axios.CancelToken.source()

      commit('SAVE_RESPONSE_STATE', {
        type: 'searchMembers',
        currState: true,
      })

      axios
        .get(
          `${process.env.VUE_APP_MEMBERS}?query=${query}`,
          {
            headers: {},
            cancelToken: callSearchMembers.token,
          }
        )

        .then(res => {
          const data = res.data

          if (data.errors.length === 0) {
            commit('SAVE_SEARCH_RESULTS', data.records)
          } else {
            for (let i = 0; i < data.errors.length; i++) {
              eventBus.$emit('showToast', {
                message: data.errors[i],
                type: 'error',
              })
            }
          }

          commit('SAVE_RESPONSE_STATE', {
            type: 'searchMembers',
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
              type: 'searchMembers',
              currState: false,
            })
          } else {
            commit('SAVE_RESPONSE_STATE', {
              type: 'searchMembers',
              currState: true,
            })
          }
        })
    },
  },
}
