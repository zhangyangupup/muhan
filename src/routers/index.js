let routes = [
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main/index.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/main/main-home/index.vue')
      },
      {
        path: 'community',
        component: () => import('../views/main/community/index.vue')
      },
      {
        path: 'personal',
        component: () => import('../views/main/personal/index.vue')
      },
      {
        path: 'applications',
        component: () => import('../views/main/applications/index.vue')
      }
    ]
  },
  {
    path: 'search',
    name: 'SearchPage',
    component: () => import('../views/search-page/index.vue')
  }
]

export default routes
