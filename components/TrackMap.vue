<template>
    <div id="mainMapContainer" class="w-full"></div>
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
    location: number[];
  }>,
});

let map: any;
// contrived way of loading leflet
const { $L } = useNuxtApp();

const open = ref(false);

onMounted(() => {
  map = setupLeafletMap(props.data.location);
});

onUnmounted(() => {
  console.log("destroy map now");
  map.remove();
})
const setupLeafletMap = (location: any) => {
  const map = $L
    .map("mainMapContainer", { zoomControl: false })
    .setView(location, 14);
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
    $L.marker(location).addTo(map);
  return map;
};
</script>
