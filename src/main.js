// =========================== //
// ===== Core components ===== //
// =========================== //

import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'


// =============================== //
// ===== Create global event ===== //
// =============================== //

/// This is deprecated in Vue 3 and only works in Vue 2
/// @link https://www.educative.io/answers/what-is-the-event-bus-in-vuejs
/// @link https://v3-migration.vuejs.org/breaking-changes/events-api.html#event-bus

export const eventBus = new Vue()


// ======================================= //
// ===== Import icons for SVG sprite ===== //
// ======================================= //

import './assets/icons'


// ============================== //
// ===== Import stylesheets ===== //
// ============================== //

import './styles/nightvue.scss'
import './styles/style.scss'
import './styles/animations/_animations.scss'


// ========================================== //
// ===== Import and register components ===== //
// ========================================== //

import appLayout from '@/layouts/AppLayout'
import appHeader from '@/components/Header'
import appFooter from '@/components/Footer'
import SvgIcon from '@/components/SvgIcon'

Vue.component('app-layout', appLayout)
Vue.component('app-header', appHeader)
Vue.component('app-footer', appFooter)
Vue.component('svg-icon', SvgIcon)


// ================================================= //
// ===== Import and register 3rd party plugins ===== //
// ================================================= //

import Waves from 'vue-waves-effect'
import 'vue-waves-effect/dist/vueWavesEffect.css'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Waves)
Vue.use(Vue2TouchEvents)


// ==================== //
// ===== Init app ===== //
// ==================== //
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
