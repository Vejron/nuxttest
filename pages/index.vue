<template>
  <NuxtLayout name="custom">
    <template #header>Spårstatus i Umeåområdet</template>
    
    <SkiGrid v-if="data?.length > 0" :table="data"></SkiGrid>
    <p v-else class="text-lg text-red-400 font-semibold">Ledsen, men det verkar som att anläggningsregistret hos umeå fritid ligger nere (503)</p>
    <!--button @click="onTest()">TEST</button-->
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