<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core';
import { watch } from 'vue';
import { useAppStore } from './store/app';
const appStore = useAppStore()

watch(
  useWindowSize().width,
  (newVal) => {
    if (newVal < 640) {
      appStore.setMobile(true)
    }
    else {
      appStore.setMobile(false)
    }
  },
  {
    immediate: true
  }
)
</script>
<template>
  <RouterView />
</template>
