<template>
  <section class="mb-3">
    <div class="flex items-center py-4" :id="props.category">
      <IconLinkVariant />
      <span class="ml-2">{{ props.name }}</span>
    </div>
    <div class="grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-3 lg:grid-cols-5">
      <AcgItem v-for="(item, idx) in props.sites" v-bind="item" :key="idx" />
    </div>
  </section>
</template>

<script setup lang="ts">
import AcgItem from './AcgItem.vue'
import IconLinkVariant from '~icons/mdi/link-variant'
import type { AcgCategory, AcgSite } from '@/constants';

interface Props {
  name: string,
  category: AcgCategory,
  sites: AcgSite[]
}

const props = defineProps<Props>()
</script>
