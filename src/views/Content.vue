<template>
  <div class="px-2 lg:px-4 w-full">
    <AcgSection v-for="(section, idx) in acgCollection" v-bind="section" :index="idx" :key="idx" />
    <div class="h-5rem"></div>
  </div>
</template>
<script setup lang="ts">
import AcgSection from '@/components/AcgSection.vue'
import { acgCollection } from '@/info'
</script>
