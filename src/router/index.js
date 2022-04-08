import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', redirect: '/cabinet' },

  {
    path: '/cabinet',
    redirect: '/cabinet/home',
    name: 'Cabinet',
    component: () => import('../layouts/AppRouterView.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
          layout: 'AppLayoutDefault',
          auth: true,
        },
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

/* eslint-disable-next-line no-unused-vars */
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
