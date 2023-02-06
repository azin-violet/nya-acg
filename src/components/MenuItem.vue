<template>
  <RouterLink :to="props.url" class="block flex w-full hover:text-[var(--color-hover)] h-4rem trans truncate">
    <div class="h-full flex items-center justify-center w-[var(--sidebar-width-collapse)] text-lg">
      <component :is="props.icon" />
    </div>
    <div v-if="!appStore.collapse" class="flex-1 flex items-center ml-2">
      <span>{{ props.title }}</span>
    </div>
  </RouterLink>
</template>
<script setup lang="ts">
import type { Component } from 'vue'
import IconN from '~icons/mdi/alpha-n-circle-outline'
import { useAppStore } from '@/store/app';

interface Props {
  icon: Component
  title: string
  url: string
}

const props = withDefaults(defineProps<Props>(), {
  icon: IconN,
})
const appStore = useAppStore()
</script>
<style scoped>
.trans {
  transition: all 300ms ease;
}
</style>
