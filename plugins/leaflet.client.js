import { defineNuxtPlugin } from '#app'
import  L, {Map} from "leaflet";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      L: L
    }
  }
})