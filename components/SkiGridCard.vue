

<template>
  <div
    tabindex="0"
    :aria-labelledby="data.name"
    class="flex flex-col bg-dark-600 rounded-lg shadow-gray-400 shadow-xl px-6 py-4"
  >
    <h2 :id="data.name" class="text-2xl font-medium mb-4">{{ data.name }}</h2>
    <p class="flex-grow mb-4">{{ data.info }}</p>
    <p class>{{ timeAgo }}</p>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

const props = defineProps({
  data: Object as PropType<{ name: string, info: string, date: string }>
});

const timeAgo = useTimeAgo(props.data.date);
</script>