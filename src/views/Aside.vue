<template>
  <aside
    class="h-screen bg-[var(--background-color)] left-0 top-0 z-20"
    :class="{
      'w-[var(--sidebar-width)]': !appStore.collapse,
      'w-[var(--sidebar-width-collapse)]': appStore.collapse && !appStore.isMobile,
      'w-0': appStore.collapse && appStore.isMobile,
      'fixed': appStore.isMobile,
      'sticky': !appStore.isMobile
    }"
  >
  <div class="h-[var(--header-height)] left-0 top-0 bg-red-200">
  </div>
  <div class="bg-red-300 overflow-y-auto h-[calc(100vh-var(--header-height))] pb-4rem">
    <div class="h-800px bg-gray-600"></div>
  </div>
  <div class="h-4rem bg-red-400 z-1 absolute left-0 bottom-0 w-full">
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
