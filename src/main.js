// Core
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import Toast from 'vue-toastification'
import Vue2TouchEvents from 'vue2-touch-events'
import VueTippy, { TippyComponent } from 'vue-tippy'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import TextHighlight from 'vue-text-highlight'
import VModal from 'vue-js-modal'

// Disable annoying messages in console
Vue.config.productionTip = false

// Create global event
export const eventBus = new Vue()

// Import and regitser components
import appLayout from '@/layouts/AppLayout'
import appHeader from '@/core/components/Header'
import appFooter from '@/core/components/Footer'
import appPreloader from '@/core/components/Preloader'
import AppCard from '@/core/components/Card'
import SVGIcon from '@/core/components/SvgIcon'
import Wizard from '@/core/components/Wizard'
import Badge from '@/core/components/Badge'
import CardOverlay from '@/core/components/CardOverlay'
import MemberSearch from '@/core/components/MemberSearch'
import Accordion from '@/core/components/Accordion'
import AccordionItem from '@/core/components/AccordionItem'
import Timeline from '@/core/components/Timeline'
import TimelineItem from '@/core/components/TimelineItem'

import Waves from 'vue-waves-effect'
import 'vue-waves-effect/dist/vueWavesEffect.css'

Vue.component('app-layout', appLayout)
Vue.component('app-header', appHeader)
Vue.component('app-footer', appFooter)

Vue.component('app-preloader', appPreloader)
Vue.component('svg-icon', SVGIcon)
Vue.component('app-card', AppCard)
Vue.component('app-wizard', Wizard)
Vue.component('app-badge', Badge)
Vue.component('card-overlay', CardOverlay)
Vue.component('member-search', MemberSearch)
Vue.component('accordion', Accordion)
Vue.component('accordion-item', AccordionItem)
Vue.component('timeline', Timeline)
Vue.component('timeline-item', TimelineItem)

Vue.use(Waves)
Vue.use(Toast, {
  transition: 'Vue-Toastification__fade',
  timeout: 4000,
  closeButton: false,
  hideProgressBar: true,
  maxToasts: 4,
  position: 'bottom-right'
})
Vue.use(Vue2TouchEvents)
Vue.use(VueTippy, {
  arrow: true,
})
Vue.use(VModal)
Vue.component('tippy', TippyComponent)
Vue.use(require('vue-moment'))
Vue.component('VuePerfectScrollbar', VuePerfectScrollbar)
Vue.component('text-highlight', TextHighlight)

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
