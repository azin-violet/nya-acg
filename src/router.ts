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
  // navigation in page
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 64, // unit: px, equal to css var: --header-height 
        behavior: 'smooth'
      }
    }
  },
})

export default router
