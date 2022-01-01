

<template>
  <div
    tabindex="0"
    :aria-labelledby="data.name"
    class="relative overflow-hidden flex flex-col bg-dark-900 rounded-lg shadow-gray-400 shadow-xl px-6 py-4"
  >
    <h2 :id="data.name" class="flex justify-between text-lg sm:text-2xl font-medium mb-2">
    <span class="truncate">{{ data.name }}</span>
    <span class="flex-none">{{data.length}} km</span>
    </h2>
    <p class="flex-grow mb-4">{{ data.info }}</p>
    <div class="flex justify-between items-center">
      <p class="capitalize px-3 py-1 rounded text-black font-medium" :style="{'background-color': color}">{{ timeAgo }}</p>
      
    </div>
    <div v-if="data.electric" class="absolute text-lg font-medium text-black px-10 bottom-3 -right-9 transform rotate-[320deg] bg-yellow-200 ">Elljus</div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

const props = defineProps({
  data: Object as PropType<{ name: string, info: string, date: string, length: number, electric: boolean }>
});

const timeAgo = useTimeAgo(props.data.date);
const color = computed(() => {
  const diff = Date.now() - new Date(props.data.date).valueOf();
  const daysAgo = Math.round(diff / 86400000);
  return ['#71EF77', '#F8C084', '#E78497'][daysAgo] ?? '#8FC7FD';
})
</script>