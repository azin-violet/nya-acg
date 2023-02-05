import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Main from './views/Main.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    component: Main,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
