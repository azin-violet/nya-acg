<template>
  <div class="px-2 w-full">
    <AcgSection v-for="(section, idx) in acgCollection" v-bind="section" :index="idx" :key="idx" />
    <div class="h-5rem"></div>
    <footer>
      <div class="p-4 text-xs">
        Copyright © 2023 V-ACG&nbsp;&nbsp;&nbsp;Design by <strong>Azin</strong>&nbsp;|&nbsp;<strong
          >Donate</strong
        >
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
import AcgSection from '@/components/AcgSection.vue'
import { acgCollection } from '@/constants'
</script>
