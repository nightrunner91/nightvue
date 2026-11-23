export default [
  {
    path: '/home',
    component: () => import('../RouterView.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
          layout: 'AppLayoutDefault'
        },
      },
    ],
  },
]
