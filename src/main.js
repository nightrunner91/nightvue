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
import appHeader from "./views/blocks/_header";
import appFooter from "./views/blocks/_footer";
import appComponent from "./views/components/_component.vue";

Vue.component('app-component', appComponent);
Vue.component('app-header', appHeader);
Vue.component('app-footer', appFooter);

// Init app
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
