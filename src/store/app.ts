import { defineStore } from "pinia";

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    collapse: false,
    isMobile: false,
    title: 'V-Acg'
  }),
  getters: {
  },
  actions: {
    setCollapse(status: boolean) {
      this.collapse = status
    },
    setMobile(status: boolean) {
      this.isMobile = status
    }
  }
})