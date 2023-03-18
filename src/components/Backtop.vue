<template>
  <div
    class="w-2rem h-2rem fixed right-3 bottom-4 hover:cursor-pointer flex items-center justify-center"
    @click="toTop()"
  >
    <IconTop class="h-full w-full hover:text-$nya-text-hover acg-transition"/>
  </div>
</template>
<script setup lang="ts">
import IconTop from '~icons/mdi/arrow-up-drop-circle-outline'
const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>
