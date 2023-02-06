<template>
  <RouterLink
    :to="props.url"
    class="block flex w-full hover:text-$color-hover truncate acg-transition"
  >
    <div class="h-full flex items-center justify-center w-$sidebar-width-collapse text-xl">
      <component :is="props.icon" />
    </div>
    <div v-if="!appStore.collapse" class="flex-1 flex items-center">
      <span>{{ props.title }}</span>
    </div>
  </RouterLink>
</template>
<script setup lang="ts">
import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import IconN from '~icons/mdi/alpha-n-circle-outline'
import { useAppStore } from '@/store/app'

interface Props {
  icon?: Component
  title: string
  url: RouteLocationRaw
}

const props = withDefaults(defineProps<Props>(), {
  icon: IconN,
})
const appStore = useAppStore()
</script>
