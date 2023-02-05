import { useAppStore } from "@/store/app"

export const useToggle = () => {
  const appStore = useAppStore()

  const toggleSidebar = () => {
    appStore.setCollapse(!appStore.collapse)
  }
  return {
    toggleSidebar,
  }
}