<template>
  <table class="table-fixed">
    <thead>
      <tr>
        <th class="w-[30%] px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">Spår</th>
        <th class="w-[50%] px-2 py-3 text-xs font-medium tracking-wider text-left uppercase">Information</th>
        <th class="w-[20%] px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">Preparerat</th>
      </tr>
    </thead>
    <tbody>
      <tr :class="{'bg-dark-700': index % 2}" v-for="({name, info, date}, index) in table" :key="name">
        <td class="px-6 py-3 text-left">{{name}}</td>
        <td class="px-2 py-3 text-left">{{info}}</td>
        <td class="px-6 py-3 text-left">{{date}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { PropType } from "vue";

const props = defineProps({
  table: Array as PropType<{name: string, info: string, date: string}[]>
});
</script>