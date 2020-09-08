// Core
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Disable annoying messages in console
Vue.config.productionTip = false

// Create global event
export const eventBus = new Vue();

// Import and regitser components
import appHeader from "./views/components/_header";
import appFooter from "./views/components/_footer";
import appComponent from "./views/components/_component.vue";

Vue.component('app-component', appComponent);
Vue.component('app-header', appHeader);
Vue.component('app-footer', appFooter);

// SVG Sprite
import sprite from './assets/sprite.svg';

fetch(sprite)
  .then(response => response.text())
  .then(svg => {
    let div = document.createElement('div');
    div.hidden = true;
    div.insertAdjacentHTML('afterbegin', svg);
    document.body.insertBefore(div, document.body.childNodes[0]);
  });

// Init app
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
