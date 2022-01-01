<template>
  <NuxtLayout name="custom">
    <template #header>Spårstatus i Umeåområdet</template>
    <SkiGrid :table="data"></SkiGrid>
    <button @click="onTest()">TEST</button>
  </NuxtLayout>
</template>

<script lang="ts">
export default {
  layout: false
};
</script>

<script setup lang="ts">
 const { data } = await useFetch('/api/scrape');

 const onTest = async () => {
   const res = await useFetch('/api/notion');
   
   console.log(res);
 }
</script>