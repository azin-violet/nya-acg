import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Content from './views/Content.vue'
import Feedback from '@/views/Feedback.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    component: Content,
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback,
  }
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
