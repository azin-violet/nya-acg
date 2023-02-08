<template>
  <Tooltip
    :content="props.abstract"
    direction="bottom"
    class="item flex max-w-full px-2 h-4rem rounded-md bg-$nya-acg-item-bg shadow-xl acg-transition"
    @click="toDeatil()"
  >
    <div class="h-full flex items-center">
      <div
        class="w-8 h-8 flex items-center justify-center mr-2 rounded-1/2 border bg-light-800 overflow-hidden"
      >
        <img :src="props.favicon" alt="logo" class="max-h-6" />
      </div>
    </div>
    <div class="overflow-hidden my-auto mr-1 flex-1">
      <div class="text-sm overflow-clip">
        <strong>{{ props.title }}</strong>
      </div>
      <p class="text-xs overflow-clip">{{ props.abstract }}</p>
    </div>
    <div
      @click.stop="toExternel()"
      title="直达"
      class="w-16px flex items-center text-$nya-text-light hover:text-$color-default"
    >
      <IconChevronRightCircleOutline />
    </div>
  </Tooltip>
</template>
<script setup lang="ts">
import IconChevronRightCircleOutline from '~icons/mdi/chevron-right-circle-outline'
import Tooltip from './Tooltip.vue'

interface Props {
  title: string
  url: string
  favicon?: string
  abstract: string
}

const props = withDefaults(defineProps<Props>(), {
  favicon: 'src/assets/imgs/noFavicon.png',
})

const toDeatil = () => {
  console.log('navigating to relative detail page...')
}

const toExternel = () => {
  window.open(props.url)
}
</script>
<style scoped>
.item:hover {
  transform: translateY(-0.25rem);
  cursor: pointer;
  z-index: 1;
}
.item:hover strong {
  color: var(--nya-text-hover);
}
</style>
