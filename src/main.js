// Core
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import Vue2TouchEvents from 'vue2-touch-events'
import './assets/icons'

// Disable annoying messages in console
Vue.config.productionTip = false

// Create global event
export const eventBus = new Vue()

// Import and regitser components
import appLayout from '@/layouts/AppLayout'
import appHeader from '@/components/Header'
import appFooter from '@/components/Footer'
import SvgIcon from '@/components/SvgIcon'

import Waves from 'vue-waves-effect'
import 'vue-waves-effect/dist/vueWavesEffect.css'

Vue.component('app-layout', appLayout)
Vue.component('app-header', appHeader)
Vue.component('app-footer', appFooter)
Vue.component('svg-icon', SvgIcon)

Vue.use(Waves)
Vue.use(Vue2TouchEvents)

// Init app
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
