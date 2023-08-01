<template>
  <div class="px-2 lg:px-4 w-full">
    <AcgSection v-for="(section, idx) in acgCollection" v-bind="section" :index="idx" :key="idx" />
  </div>
</template>
<script setup lang="ts">
import { Ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { AcgSite, acgCollection } from '@/info'
import AcgSection from '@/components/AcgSection.vue'

const visitedUrls : Ref<string[]> = useStorage('visited-sites', [])

const visitedSites = visitedUrls.value.map(item => {
  for(let i=0; i < acgCollection.length; i++) {
    const result = acgCollection[i].sites.find(site => {
      return site.url == item
    })
    if (result) {
      return result
    }
  }
})

acgCollection[0].sites = visitedSites as AcgSite[]
</script>
