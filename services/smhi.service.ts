import { $fetch } from 'ohmyfetch'

export async function getForecast() {
  return await $fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json')
}