<template>
  <div class="w-full h-100px flex items-center justify-center">
    <Tooltip :content="tip" direction="bottom"><div class="text-2xl">Support & Feedback</div></Tooltip>
  </div>
</template>
<script setup lang="ts">
import Tooltip from '@/components/Tooltip.vue'
const tip = 'to be completed'
</script>
