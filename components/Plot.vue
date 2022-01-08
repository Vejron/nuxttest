<template>
  <div class="w-full" ref="target"></div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

import "uplot/dist/uPlot.min.css";
import { getForecast } from "~~/services/smhi.service";

const props = defineProps({
  data: Object as PropType<{
    name: string;
    info: string;
    date: string;
    length: number;
    electric: boolean;
    location: any[];
  }>,
});

const { $uPlot } = useNuxtApp();
let instance: uPlot = null;
let target = ref<HTMLDivElement>(null);

const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    if(entry.contentBoxSize) {
      // Firefox implements `contentBoxSize` as a single content rect, rather than an array
      const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
      if(instance) {
        instance.setSize({width: contentBoxSize.inlineSize, height: 160});
      }
    } 
  }
});

onMounted(async () => {
  const res = await getForecast(props.data.location);
  console.log(res);
  const temperatures = res.timeSeries.map(point => point.parameters[1].values[0]);
  const times = res.timeSeries.map(point => Math.floor(new Date(point.validTime).valueOf() / 1000));
  const width = target.value.clientWidth;
  let opts = {
    width,
    height: 160,
    series: [
      {},
      {
        // initial toggled state (optional)
        show: true,
        spanGaps: false,
        // in-legend display
        label: "Temperatur",
        value: (self, rawValue) => rawValue.toFixed(1) + "°C",
        // series style
        stroke: "blue",
        width: 2,
        fill: "rgba(0, 0, 200, 0.3)",
        dash: [10, 5],
      },
    ],
  };

  let data = [
    times.slice(0, 24), // x-values (timestamps)
    temperatures.slice(0, 24), // y-values (series 1)
  ];

  resizeObserver.observe(target.value);

  instance = new $uPlot(opts, data as any, target.value);
});

onBeforeUnmount(() => {
  resizeObserver.unobserve(target.value);
  instance.destroy();
});

</script>
