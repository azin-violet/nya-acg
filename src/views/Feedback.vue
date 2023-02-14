<template>
  <div class="w-full h-100px flex items-center justify-center">
    <Tooltip :content="tip" direction="bottom"><div class="text-2xl">投稿 & 反馈</div></Tooltip>
  </div>
</template>
<script setup lang="ts">
import Tooltip from '@/components/Tooltip.vue'
const tip = 'to be completed'
</script>
