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
    windowScroll: 0,

    // Dublicated in styles/core/_grid.scss
    breakpoints: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400
    },
  },
  mutations: {
    SAVE_WINDOW_WIDTH(state, params) {
      Object.keys(params).forEach(key => {
        state.windowSize[key] = params[key]
      })
    },

    SAVE_WINDOW_SCROLL(state, data) {
      state.windowScroll = data
    },
  },
  actions: {

  },
}
