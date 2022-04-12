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
      'xs': 576,
      'sm': 768,
      'md': 1024,
      'lg': 1280,
      'xl': 1600,
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
