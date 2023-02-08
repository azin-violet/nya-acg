<template>
    <div class="tip relative">
      <slot></slot>
      <div class="tip-text" :class="`tip-text-${props.direction}`">{{ props.content }}</div>
    </div>
</template>
<script setup lang="ts">
interface Props {
  content: string
  direction: 'top' | 'bottom' | 'left' | 'right'
}

const props = defineProps<Props>()
</script>
<style scoped>
.tip-text {
  position: absolute;
  visibility: hidden;
  color: var(--nya-tooltip);
  background-color: var(--nya-tooltip-bg);
  font-size: x-small;
  text-align: center;
  border-radius: 0.5rem;
  padding: 0.5rem;
  opacity: 0;
  transition: opacity 300ms ease;
}
.tip-text-top {
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(100% + 0.5rem);
}
.tip-text-top::after {
  content: '';
  position: absolute;
  border-style: solid;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-color: var(--nya-tooltip-bg) transparent transparent transparent;
}
.tip-text-bottom {
  left: 50%;
  transform: translateX(-50%);
  top: calc(100% + 0.5rem);
}
.tip-text-bottom::after {
  content: '';
  position: absolute;
  border-style: solid;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-color: transparent transparent var(--nya-tooltip-bg) transparent;
}
.tip-text-left {
  top: 50%;
  transform: translateY(-50%);
  right: calc(100% + 0.5rem);
  white-space: nowrap;
}
.tip-text-left::after {
  content: '';
  position: absolute;
  border-style: solid;
  left: 100%;
  top: 50%;
  margin-top: -5px;
  border-width: 5px;
  border-color: transparent transparent transparent var(--nya-tooltip-bg);
}
.tip-text-right {
  top: 50%;
  transform: translateY(-50%);
  left: calc(100% + 0.5rem);
  white-space: nowrap;
}
.tip-text-right::after {
  content: '';
  position: absolute;
  border-style: solid;
  right: 100%;
  top: 50%;
  margin-top: -5px;
  border-width: 5px;
  border-color: transparent var(--nya-tooltip-bg) transparent transparent;
}
.tip:hover .tip-text {
  visibility: visible;
  opacity: 1;
  z-index: 20;
}
</style>