import { defineNuxtPlugin } from '#app'
import uPlot from "uplot"

export default defineNuxtPlugin(() => {
  return {
    provide: {
      uPlot
    }
  }
})