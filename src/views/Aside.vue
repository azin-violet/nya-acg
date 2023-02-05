<template>
  <aside
    class="h-screen bg-[var(--background-color)] left-0 top-0 z-20"
    :class="{
      'w-[var(--sidebar-width)]': !appStore.collapse,
      'w-[var(--sidebar-width-collapse)]': appStore.collapse && !appStore.isMobile,
      'w-0': appStore.collapse && appStore.isMobile,
      fixed: appStore.isMobile,
      sticky: !appStore.isMobile,
    }"
  >
    <!-- sidebar header -->
    <div class="h-[var(--header-height)] left-0 top-0 flex">
      <div class="w-[var(--sidebar-width-collapse)] flex items-center justify-center">
        <RouterLink :to="{ name: 'Root' }"><img src="@/assets/vue.svg" alt="logo" /></RouterLink>
      </div>
      <div
        class="flex-1 flex items-center text-xl lg:text-2xl font-semibold ml-1 truncate"
        v-show="!appStore.collapse"
      >
        <RouterLink :to="{ name: 'Root' }"
          ><span>{{ appStore.title }}</span></RouterLink
        >
      </div>
    </div>
    <!-- sidebar header end -->

    <!-- sidebar menu -->
    <div class="overflow-y-auto h-[calc(100vh-var(--header-height))] pb-4rem">
      <div class="h-800px bg-gray-600"></div>
    </div>
    <!-- sidebar menu end -->

    <!-- sidebar anchor -->
    <div class="h-4rem bg-red-400 z-1 absolute left-0 bottom-0 w-full"></div>
    <!-- sidebar anchor end -->
  </aside>
</template>
<script setup lang="ts">
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
</script>
<style scoped>
aside {
  transition: all 300ms ease;
}
</style>
