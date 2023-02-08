<template>
  <div class="relative flex">
    <Aside />
    <div class="flex-1 relative">
      <Header />
      <RouterView />
      <footer>
        <div class="p-5 text-xs">
          Copyright © 2023 {{ appStore.title }}&nbsp;&nbsp;&nbsp;Design by
          <a href="https://github.com/azin-violet" target="_blank"
            ><strong class="hover:text-$nya-text-hover">Azin</strong></a
          >
        </div>
      </footer>
    </div>
    <div
      class="mask"
      v-if="!appStore.collapse && appStore.isMobile"
      @click="appStore.setCollapse(!appStore.collapse)"
    ></div>
  </div>
</template>
<script setup lang="ts">
import Header from './Header.vue'
import Aside from './Aside.vue'
import { useAppStore } from '@/store/app'

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
