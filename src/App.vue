<script lang="ts" setup>
import Main from './views/Main.vue'
import { useWindowSize } from '@vueuse/core'
import { watch } from 'vue'
import { useAppStore } from './store/app'
const appStore = useAppStore()

document.title = `Home | ${appStore.title}`
watch(
  useWindowSize().width,
  (newVal) => {
    if (newVal < 640) {
      appStore.setMobile(true)
    } else {
      appStore.setMobile(false)
    }
  },
  {
    immediate: true,
  }
)
</script>
<template>
  <Main />
</template>
