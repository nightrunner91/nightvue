import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    windowSize: {
      width: undefined,
      height: undefined
    },
    currentBreakpoint: undefined,
    windowScroll: 0,

    // Dublicated in 'styles/core/_variables.scss'
    breakpoints: {
      xs: 576,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1400
    },
  },
  mutations: {
    SAVE_WINDOW_WIDTH(state, params) {
      Object.keys(params).forEach(key => {
        state.windowSize[key] = params[key]
      })
    },

    SAVE_CURRENT_BREAKPOINT(state, width) {
      Object.entries(state.breakpoints).forEach(entry => {
        if (width >= [entry[1]]) {
          state.currentBreakpoint = entry[0]
        }
      })
    },

    SAVE_WINDOW_SCROLL(state, data) {
      state.windowScroll = data
    },
  },
  actions: {

  },
}
