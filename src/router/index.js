import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', redirect: '/cabinet' },

  {
    path: '/cabinet',
    redirect: '/cabinet/dashboard',
    name: 'Cabinet',
    component: () => import('@/layouts/AppRouterView.vue'),
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('@/views/Home.vue'),
        meta: {
          layout: 'AppLayoutDefault',
          auth: true,
          mobile: true,
        },
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

function consoleMonitor() {
  const logStyles = {
    router: 'background: #64B5F6; color: #343a40; padding: 3px 6px; border-radius: 4px; font-weight: 700; text-transform: uppercase',
    get: 'background: #4CAF50; color: #343a40; padding: 3px 6px; border-radius: 4px; font-weight: 700',
    post: 'background: #FF5722; color: #343a40; padding: 3px 6px; border-radius: 4px; font-weight: 700',
    danger: 'background: #FF3D00; color: white; font-size: 16px; padding: 1rem; border-radius: 6px; margin: 20px 0 20px 0;',
  }

  if (process.env.VUE_APP_ENV === 'production') {
    console.log('%c✋ Warning! This is a browser feature intended for developers. If someone told you to copy and paste something here to enable a feature or "hack" someone\'s account, it is a scam and will give them access to your account.', logStyles.danger)
  }

  if (
    process.env.VUE_APP_ENV === 'development' ||
    process.env.VUE_APP_ENV === 'staging') {
    axios.interceptors.response.use(response => {
      console.log(`%c${router.history.current.name}`, logStyles['router'])
      console.log(`%c${response.config.method.toUpperCase()} ⇒ ${response.config.baseURL}${response.config.url}`, logStyles[response.config.method])
      console.log(response.data)
      return response
    }, error => {
      console.error(error)
      return Promise.reject(error)
    })
  }
}

consoleMonitor()

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
