import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    windowWidth: undefined,

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
    SAVE_WINDOW_WIDTH(state, data) {
      state.windowWidth = data
    }
  },
  actions: {

  },
}
