<template>
  <section class="mb-3">
    <div class="card-header flex items-center py-4">
      <IconLinkVariant />
      <span class="ml-2">{{ props.categeryName }}</span>
    </div>
    <div class="grid grid-cols-2 gap-x-3 gap-y-5">
      <AcgItem v-for="item in props.items" v-bind="item"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import AcgItem from './AcgItem.vue';
import IconLinkVariant from '~icons/mdi/link-variant'

interface AcgItem {
  imageUrl: string
  title: string
  description: string
  exteralUrl: string
}

interface AcgSection {
  categeryName: string,
  items: AcgItem[],
}

const props = defineProps<AcgSection>()
</script>