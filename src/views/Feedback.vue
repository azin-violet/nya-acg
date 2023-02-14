<template>
  <div class="w-full flex items-center justify-center">
    <Tooltip :content="tip" direction="bottom"><div class="text-2xl w-100 text-center">投稿 & 反馈</div></Tooltip>
  </div>
</template>
<script setup lang="ts">
import Tooltip from '@/components/Tooltip.vue'
const tip = 'To be completed'
</script>
