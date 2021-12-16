<template>
  <NuxtLayout name="custom">
    <template #header>Spårstatus i Umeåområdet. </template>
    <SkiGrid :table="data"></SkiGrid>
    
    The rest of the page
  </NuxtLayout>
</template>

<script lang="ts">
export default {
  layout: false
};
</script>

<script setup lang="ts">
 const { data } = await useFetch('/api/scrape');
</script>