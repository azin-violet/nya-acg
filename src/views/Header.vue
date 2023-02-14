<template>
  <header
    class="sticky top-0 left-0 backdrop-filter bg-$nya-bg-header backdrop-blur-sm z-10 h-$header-height w-full text-xl"
  >
    <div class="flex h-full px-2 justify-between">
      <div class="flex items-center">
        <button
          @click="appStore.setCollapse(!appStore.collapse)"
          class="flex items-center hover:text-$nya-text-hover acg-transition"
        >
          <IconMenu />
        </button>
      </div>
      <!-- <div class="flex items-center flex-1 text-xl font-semibold justify-center">
        <RouterLink :to="{ name: 'Home' }" class="flex items-center">
          <img src="@/assets/vue.svg" alt="logo" class="h-8 mr-2" />
          V-Acg
        </RouterLink>
      </div> -->
      <div class="flex items-center">
        <div class="mr-4 hover:cursor-pointer" @click="toggleDark()">
          <IconNight v-if="isDark" />
          <IconSun v-else />
        </div>
        <a :href="appStore.repo" class="block lg:mr-1rem" target="_blank">
          <IconGithub />
        </a>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import IconMenu from '~icons/mdi/menu'
import IconGithub from '~icons/mdi/github'
import IconNight from '~icons/mdi/weather-night'
import IconSun from '~icons/mdi/weather-sunny'
import { useDark, useToggle } from '@vueuse/core'
import { useAppStore } from '@/store/app'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const appStore = useAppStore()
</script>
