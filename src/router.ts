import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Content from './views/Content.vue'
import Feedback from '@/views/Feedback.vue'
import { useAppStore } from './store/app'
import { upFirst } from './utils'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Content,
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback,
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
        behavior: 'smooth',
      }
    }
  },
})

router.beforeEach((to, from) => {
  const appStore = useAppStore()
  if (to.hash) {
    document.title = `${upFirst(to.hash.slice(1))} | ${appStore.title}`
  } else {
    document.title = `${upFirst(to.name as string)} | ${appStore.title}`
  }
})
export default router
