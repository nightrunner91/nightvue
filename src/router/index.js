import Vue from 'vue'
import VueRouter from 'vue-router'

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
  routes,
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
