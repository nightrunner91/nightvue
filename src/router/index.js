import Vue from 'vue'
import VueRouter from 'vue-router'

// Modules
import home from './modules/home'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'App', redirect: '/home' },

  ...home,

  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
