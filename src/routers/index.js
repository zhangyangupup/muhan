let routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/main/index.vue')
  },
  {
    path: '/applications',
    name: 'applications',
    component: () => import('../views/applications/index.vue')
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('../views/personal/index.vue')
  },
  {
    path: '/shequ',
    name: 'shequ',
    component: () => import('../views/shequ/index.vue')
  }

]

export default routes
