<template>
  <div class="relative flex">
    <Aside />
    <div class="flex-1 relative">
      <Header />
      <RouterView />
      <footer>
      <div class="p-5 text-xs">
        Copyright © 2023 V-ACG&nbsp;&nbsp;&nbsp;Design by <strong>Azin</strong>&nbsp;|&nbsp;<strong
          >Donate</strong
        >
      </div>
    </footer>
    </div>
    <div class="mask" v-if="!appStore.collapse && appStore.isMobile" @click="toggleSidebar()"></div>
  </div>
</template>
<script setup lang="ts">
import Header from './Header.vue'
import Aside from './Aside.vue'
import { useAppStore } from '@/store/app'
import { useToggle } from '@/composable/useToggle'

const { toggleSidebar } = useToggle()
const appStore = useAppStore()
</script>
<style scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 15;
}
</style>
