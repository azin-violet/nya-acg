<template>
  <div class="px-2 pt-[var(--header-height)] container">
    <AcgSection v-for="section in sitesData" v-bind="section" />
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
import { sitesData } from '@/constants'
</script>
