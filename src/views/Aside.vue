<template>
  <aside
    class="h-screen left-0 top-0 z-20 acg-transition flex flex-col"
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
    <div class="h-$header-height bg-$nya-bg-header-aside flex text-xl lg:text-2xl font-semibold text-black dark:text-white" >
      <div class="w-$sidebar-width-collapse flex items-center justify-center">
        <RouterLink :to="{ name: 'Home' }">
          <img src="@/assets/hutao.png" alt="logo" class="h-8 lg:h-10 rounded-sm" />
        </RouterLink>
      </div>
      <div class="flex-1 flex items-center truncate" v-show="!appStore.collapse">
        <RouterLink :to="{ name: 'Home' }">
          <span class="ml-2">{{ appStore.title }}</span>
        </RouterLink>
      </div>
    </div>
    <!-- sidebar header end -->
    <!-- sidebar menu -->
    <div class="overflow-auto bg-$nya-bg-menu flex-1">
      <MenuItem
        @click="smartCollapse()"
        v-for="(section, idx) in acgCollection"
        :key="idx"
        :title="section.name"
        :url="{name: 'Home', hash: `#${section.category}`}"
        :icon="iconMap[section.category]"
        class="h-$sidebar-menu-item-height"
      />
    </div>
    <!-- sidebar menu end -->
    <!-- sidebar anchor -->
    <div class="h-$sidebar-anchor-height bg-$nya-bg-menu overflow-hidden">
      <MenuItem @click="smartCollapse()" :url="{name: 'Feedback'}" title="投稿&反馈" :icon="IconFeedback" class="h-full" />
    </div>
    <!-- sidebar anchor end -->
  </aside>
</template>
<script setup lang="ts">
import MenuItem from '@/components/MenuItem.vue'
import { useAppStore } from '@/store/app'
import { onMounted } from 'vue'
import { acgCollection, iconMap } from '@/info'
import IconFeedback from '~icons/mdi/text-box-edit-outline'

const appStore = useAppStore()
const smartCollapse = () => {
  if (appStore.isMobile) {
    appStore.setCollapse(!appStore.collapse)
  }
}
onMounted(() => {
  if (appStore.isMobile) {
    appStore.setCollapse(true)
  } else {
    appStore.setCollapse(false)
  }
})
</script>
