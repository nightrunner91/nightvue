export default [
  {
    path: '/home',
    name: 'Home',
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
