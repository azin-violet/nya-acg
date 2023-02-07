<template>
  <aside
    class="h-screen bg-$background-color left-0 top-0 z-20 acg-transition"
    :class="{
      'w-$sidebar-width': !appStore.collapse,
      'w-$sidebar-width-collapse': appStore.collapse && !appStore.isMobile,
      'w-0': appStore.collapse && appStore.isMobile,
      // prettier-ignore
      'fixed': appStore.isMobile,
      // prettier-ignore
      'sticky': !appStore.isMobile,
    }"
  >
    <!-- sidebar header -->
    <div class="h-$header-height flex text-xl lg:text-2xl font-semibold">
      <div class="w-$sidebar-width-collapse flex items-center justify-center">
        <RouterLink :to="{ name: 'Root' }">
          <img src="@/assets/vue.svg" alt="logo" class="h-8 lg:h-10" />
        </RouterLink>
      </div>
      <div class="flex-1 flex items-center ml-1 truncate" v-show="!appStore.collapse">
        <RouterLink :to="{ name: 'Root' }">
          <span>{{ appStore.title }}</span>
        </RouterLink>
      </div>
    </div>
    <!-- sidebar header end -->
    <!-- sidebar menu -->
    <div class="overflow-auto h-[calc(100vh-var(--header-height)-var(--sidebar-anchor-height))]">
      <MenuItem
        v-for="(section, idx) in acgCollection"
        :key="idx"
        :title="section.name"
        :url="`#${section.category}`"
        :icon="iconMap[section.category]"
        class="h-$sidebar-menu-item-height"
      />
    </div>
    <!-- sidebar menu end -->
    <!-- sidebar anchor -->
    <div class="h-$sidebar-anchor-height">
      <MenuItem url="#" title="投稿&反馈" :icon="IconFeedback" class="h-full" />
    </div>
    <!-- sidebar anchor end -->
  </aside>
</template>
<script setup lang="ts">
import MenuItem from '@/components/MenuItem.vue'
import { useAppStore } from '@/store/app'
import { onMounted } from 'vue'
import { acgCollection, iconMap } from '@/constants'
import IconFeedback from '~icons/mdi/text-box-edit-outline'

const appStore = useAppStore()
onMounted(() => {
  if (appStore.isMobile) {
    appStore.setCollapse(true)
  } else {
    appStore.setCollapse(false)
  }
})
</script>
