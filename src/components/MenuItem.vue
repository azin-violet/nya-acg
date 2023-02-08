<template>
  <RouterLink
    :to="props.url"
    class="block flex w-full hover:text-$nya-text-hover acg-transition"
  >
    <div class="h-full flex items-center justify-center w-$sidebar-width-collapse text-xl"
    :title="appStore.collapse && !appStore.isMobile ? props.title : undefined"
    >
      <component :is="props.icon" />
    </div>
    
    <div v-if="!appStore.collapse" class="flex-1 flex items-center truncate">
      <span>{{ props.title }}</span>
    </div>
  </RouterLink>
</template>
<script setup lang="ts">
import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import { useAppStore } from '@/store/app'

interface Props {
  icon: Component
  title: string
  url: RouteLocationRaw
}

const props = defineProps<Props>()
const appStore = useAppStore()
</script>
