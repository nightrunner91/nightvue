import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_HTTP || ''

// Modules
import config from './modules/config'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    config,
  },
  strict: process.env.DEV,
})
