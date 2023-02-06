<template>
  <div
    class="item flex max-w-full px-2 h-4rem border rounded-md bg-light-100 shadow-xl relative acg-transition"
    @click="toDeatil()"
  >
    <div class="h-full flex items-center">
      <div class="w-8 h-8 flex items-center justify-center mr-2">
        <img :src="props.imageUrl" alt="logo" />
      </div>
    </div>
    <div class="overflow-hidden my-auto mr-1 flex-1">
      <div class="text-sm overflow-clip">
        <strong>{{ props.title }}</strong>
      </div>
      <p class="text-xs overflow-clip">{{ props.description }}</p>
    </div>
    <div
      @click.stop="toExternel()"
      class="w-16px flex items-center text-$color-light hover:text-$color-default"
    >
      <IconChevronRightCircleOutline />
    </div>
    <div>
      <div class="tooltiptext">
        <span>{{ props.description }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconChevronRightCircleOutline from '~icons/mdi/chevron-right-circle-outline'

interface Item {
  imageUrl: string
  title: string
  description: string
  exteralUrl: string
}

const props = defineProps<Item>()

const toDeatil = () => {
  console.log('navigating to relative detail page...')
}

const toExternel = () => {
  window.open(props.exteralUrl)
}
</script>
<style scoped>
.item:hover {
  transform: translateY(-0.25rem);
  cursor: pointer;
  z-index: 1;
}
.item:hover strong {
  color: var(--color-hover);
}
.tooltiptext {
  visibility: hidden;
  width: 80%;
  background-color: var(--color-tooltip-bg);
  color: var(--color-tooltip);
  font-size: x-small;
  text-align: center;
  border-radius: 0.5rem;
  padding: 0.5rem;
  position: absolute;
  top: 125%;
  left: 10%;
  opacity: 0;
  transition: opacity 300ms ease;
}
.tooltiptext::after {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #555 transparent;
}
.item:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
