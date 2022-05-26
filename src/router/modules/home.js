export default [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/layouts/AppRouterView.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
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
