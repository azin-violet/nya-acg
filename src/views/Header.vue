<template>
  <header
    class="sticky top-0 left-0 backdrop-filter backdrop-blur-sm z-10 h-[var(--header-height)] border-b w-full"
  >
    <div class="flex h-full px-2">
      <div class="flex items-center">
        <button @click="toggle()" class="flex items-center text-xl hover:text-[var(--color-hover)]">
          <IconMenu />
        </button>
      </div>
      <div class="flex items-center flex-1 text-xl font-semibold justify-center">
        <RouterLink :to="{ name: 'Root' }" class="flex items-center">
          <img src="@/assets/vue.svg" alt="logo" class="h-8 mr-2" />
          V-Acg
        </RouterLink>
      </div>
      <div class="flex items-center">
        <a href="https://github.com/azin-violet" class="text-xl" target="_blank">
          <IconGithub />
        </a>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import IconMenu from '~icons/mdi/menu'
import IconGithub from '~icons/mdi/github'
import { useAppStore } from '@/store/app';

const appStore = useAppStore()

const toggle = () => {
  appStore.setCollapse(!appStore.collapse)
}
</script>
<style scoped>
button {
  transition: all 300ms ease;
}
</style>
