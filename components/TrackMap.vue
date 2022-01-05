<template>
    <div :data="data" id="mainMapContainer" class="h-96 w-full"></div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import "leaflet/dist/leaflet.css";
import { getForecast } from "~~/services/smhi.service";

const props = defineProps({
  data: Object as PropType<{
    name: string;
    info: string;
    date: string;
    length: number;
    electric: boolean;
  }>,
});

let map: any;
// contrived way of loading leflet
const { $L } = useNuxtApp();

const open = ref(false);

onMounted( async () => {
  console.log("HELLO", $L);
  map = setupLeafletMap();
  const b = await getForecast();
  console.log('bbb', b);
});

onUnmounted(() => {
  console.log("destroy map now");
  map.remove();
})
const setupLeafletMap = () => {
  const map = $L
    .map("mainMapContainer", { zoomControl: false })
    .setView([63.8252223, 20.2369007], 11);
  $L.control
    .zoom({
      position: "topright",
    })
    .addTo(map);
  $L.tileLayer
    .wms("https://wms.umea.se/geoserver/gwc/service/wms?", {
      layers: "Projektkarta_V2",
    })
    .addTo(map);
  return map;
};
</script>
