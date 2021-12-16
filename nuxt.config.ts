import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  nitro: {
    preset: 'lambda'
  },
  buildModules: [
    '@vueuse/nuxt',
    'nuxt-windicss',
  ],
})
