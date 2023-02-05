<template>
  <aside
    class="h-screen bg-[var(--background-color)] left-0 top-0 z-20"
    :class="{
      'w-[var(--sidebar-width)]': !appStore.collapse,
      'w-[var(--sidebar-width-collapse)]': appStore.collapse && !appStore.isMobile,
      'w-0': appStore.collapse && appStore.isMobile,
      'absolute': appStore.isMobile,
      'sticky': !appStore.isMobile
    }"
  >
  <div class="h-[var(--header-height)] border-b left-0 top-0 bg-red-200">
    
  </div>
  <div class="h-[calc(100vh-var(--header-height)-4rem)] bg-red-300">
  </div>
  <div class="h-4rem bg-red-400">
    anchor
  </div>
  </aside>
</template>
<script setup lang="ts">
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
</script>
<style scoped>
aside {
  transition: width 300ms ease;
}
</style>
