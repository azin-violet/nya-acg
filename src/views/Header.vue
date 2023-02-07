<template>
  <header
    class="sticky top-0 left-0 backdrop-filter bg-$nya-bg-header backdrop-blur-sm z-10 h-$header-height w-full text-xl"
  >
    <div class="flex h-full px-2 justify-between">
      <div class="flex items-center">
        <button
          @click="toggleSidebar()"
          class="flex items-center hover:text-$color-hover acg-transition"
        >
          <IconMenu />
        </button>
      </div>
      <!-- <div class="flex items-center flex-1 text-xl font-semibold justify-center">
        <RouterLink :to="{ name: 'Root' }" class="flex items-center">
          <img src="@/assets/vue.svg" alt="logo" class="h-8 mr-2" />
          V-Acg
        </RouterLink>
      </div> -->
      <div class="flex items-center">
        <a :href="appStore.repo" class="block lg:mr-2rem" target="_blank">
          <IconGithub />
        </a>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import IconMenu from '~icons/mdi/menu'
import IconGithub from '~icons/mdi/github'
import { useAppStore } from '@/store/app'
import { useToggle } from '@/composable/useToggle'

const appStore = useAppStore()
const { toggleSidebar } = useToggle()
</script>
