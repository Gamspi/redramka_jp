import { RouteRecordRaw } from 'vue-router'

import MainLayout from 'src/layouts/mainLayout/MainLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [{ path: '', component: () => import('pages/mainPage/Index.vue') }]
  },
  {
    path: '/about',
    component: MainLayout,
    children: [{ path: '', component: () => import('pages/about/about.vue') }]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
