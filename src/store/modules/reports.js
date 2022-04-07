import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { eventBus } from '../../main'

Vue.use(Vuex)

axios.defaults.withCredentials = true

export default {
  namespaced: true,
  state: {
    reports: {
      transactions: {
        records: [],
        stats: {
          total: undefined,
          next: 0,
        }
      },

      fees: {
        records: [],
        stats: {
          total: undefined,
          next: 0,
        }
      },

      bonuses: {
        records: [],
        stats: {
          total: undefined,
          next: 0,
        }
      },
    },

    responses: {
      transactions: false,
      fees: false,
      bonuses: false,
    }
  },
  mutations: {
    SAVE_REPORTS(state, { type, data, mode }) {
      if (mode === 'push') {
        for (let i = 0; i < data.length; i++) {
          state.reports[type].records.push(data[i])
        }
      } else if (mode === 'refresh') {
        state.reports[type].records = data
      }
    },

    CLEAR_REPORTS(state, type) {
      state.reports[type].records = []
    },

    SAVE_REPORTS_STATS(state, { type, total, next }) {
      state.reports[type].stats.total = total
      state.reports[type].stats.next = next
    },

    SAVE_RESPONSE_STATE(state, { type, currState }) {
      state.responses[type] = currState
    },
  },
  actions: {
    getReports({ commit }, { type, startFrom, mode }) {
      commit('SAVE_RESPONSE_STATE', {
        type: type,
        currState: true,
      })

      const apiLinks = {
        transactions: process.env.VUE_APP_TRANSACTIONS,
        fees: process.env.VUE_APP_FEES,
        bonuses: process.env.VUE_APP_BONUSES,
      }

      axios
        .get(`${apiLinks[type]}?start=${startFrom}`)

        .then(res => {
          const data = res.data

          if (data.errors.length === 0) {
            commit('SAVE_REPORTS', {
              type: type,
              data: data.records,
              mode: mode,
            })
            commit('SAVE_REPORTS_STATS', {
              type: type,
              total: data.totals,
              next: data.next
            })
          } else {
            for (let i = 0; i < data.errors.length; i++) {
              eventBus.$emit('showToast/ReportsList', {
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

          eventBus.$emit('showToast/ReportsList', {
            message: 'Oops! Something went wrong',
            type: 'error',
          })

          commit('SAVE_RESPONSE_STATE', {
            type: type,
            currState: false,
          })
        })
    },

    clearReports({ state, commit }) {
      Object.keys(state.reports).forEach(key => {
        commit('CLEAR_REPORTS', key)
        commit('SAVE_REPORTS_STATS', {
          type: key,
          total: undefined,
          next: 0
        })
      })
    }
  },
}
