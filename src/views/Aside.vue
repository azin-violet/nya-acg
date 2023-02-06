<template>
  <aside
    class="h-screen bg-[var(--background-color)] left-0 top-0 z-20"
    :class="{
      'w-[var(--sidebar-width)]': !appStore.collapse,
      'w-[var(--sidebar-width-collapse)]': appStore.collapse && !appStore.isMobile,
      'w-0': appStore.collapse && appStore.isMobile,
      'fixed': appStore.isMobile,
      'sticky': !appStore.isMobile,
    }"
  >
    <!-- sidebar header -->
    <div class="h-[var(--header-height)] left-0 top-0 flex text-xl lg:text-2xl font-semibold">
      <div class="w-[var(--sidebar-width-collapse)] flex items-center justify-center">
        <RouterLink :to="{ name: 'Root' }"><img src="@/assets/vue.svg" alt="logo" class="h-8 lg:h-10" /></RouterLink>
      </div>
      <div
        class="flex-1 flex items-center ml-1 truncate"
        v-show="!appStore.collapse"
      >
        <RouterLink :to="{ name: 'Root' }"
          ><span>{{ appStore.title }}</span></RouterLink
        >
      </div>
    </div>
    <!-- sidebar header end -->

    <!-- sidebar menu -->
    <div class="overflow-y-auto h-[calc(100vh-var(--header-height)-4rem)]">
      <MenuItem url="#item-1" title="在线动漫" v-for="idx in 5" :key="idx" />
    </div>
    <!-- sidebar menu end -->
    <div>
      <MenuItem url="info" title="投稿&反馈" class="bg-[#fff] left-0 bottom-0" />
    </div>
  </aside>
</template>
<script setup lang="ts">
import MenuItem from '@/components/MenuItem.vue'
import { useAppStore } from '@/store/app'
import { onMounted } from 'vue'

const appStore = useAppStore()
onMounted(() => {
  if (appStore.isMobile) {
    appStore.setCollapse(true)
  }
  else {
    appStore.setCollapse(false)
  }
})
</script>
<style scoped>
aside {
  transition: all 300ms ease;
}
</style>
