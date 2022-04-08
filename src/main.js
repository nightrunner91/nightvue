// Core
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import Vue2TouchEvents from 'vue2-touch-events'

// Disable annoying messages in console
Vue.config.productionTip = false

// Create global event
export const eventBus = new Vue()

// Import and regitser components
import appLayout from '@/layouts/AppLayout'
import appHeader from '@/core/components/Header'
import appFooter from '@/core/components/Footer'
import SVGIcon from '@/core/components/SvgIcon'

import Waves from 'vue-waves-effect'
import 'vue-waves-effect/dist/vueWavesEffect.css'

Vue.component('app-layout', appLayout)
Vue.component('app-header', appHeader)
Vue.component('app-footer', appFooter)
Vue.component('svg-icon', SVGIcon)

Vue.use(Waves)
Vue.use(Vue2TouchEvents)

// SVG Sprite
import sprite from './assets/icons/sprite.svg'

fetch(sprite)
  .then(response => response.text())
  .then(svg => {
    let div = document.createElement('div')
    div.hidden = true
    div.insertAdjacentHTML('afterbegin', svg)
    document.body.insertBefore(div, document.body.childNodes[0])
  })

// Init app
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
