<template>
  <section class="mb-3">
    <div class="flex items-center py-4" :id="`section-${props.index}`">
      <IconLinkVariant />
      <span class="ml-2">{{ props.categeryName }}</span>
    </div>
    <div class="grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-3 lg:grid-cols-5">
      <AcgItem v-for="(item, idx) in props.items" v-bind="item" :key="idx" />
    </div>
  </section>
</template>

<script setup lang="ts">
import AcgItem from './AcgItem.vue'
import IconLinkVariant from '~icons/mdi/link-variant'

interface AcgItem {
  imageUrl: string
  title: string
  description: string
  exteralUrl: string
}

interface AcgSection {
  categeryName: string
  index: number
  items: AcgItem[]
}

const props = defineProps<AcgSection>()
</script>
