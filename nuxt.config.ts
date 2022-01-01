import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@vueuse/nuxt',
    'nuxt-windicss',
  ],
  privateRuntimeConfig: {
    NOTION_KEY: process.env.NOTION_KEY || 'secret_1wCZdiqZ7vhCT3atZNjxVEmbLLaD7bWr2OrG8ABKqWJ',
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID || 'b4127d82e19c4d5093a6b1cc6ea65c1e'
  }
  
})
