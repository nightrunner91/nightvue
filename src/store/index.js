import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_HTTP || ''

// Modules
import config from './modules/config'
import auth from './modules/auth'
import user from './modules/user'
import deposit from './modules/deposit'
import withdraw from './modules/withdraw'
import transfer from './modules/transfer'
import members from './modules/members'
import receive from './modules/receive'
import reports from './modules/reports'
import support from './modules/support'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    config,
    auth,
    user,
    deposit,
    withdraw,
    transfer,
    members,
    receive,
    reports,
    support,
  },
  strict: process.env.DEV,
})
