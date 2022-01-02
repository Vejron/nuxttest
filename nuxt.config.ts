import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  head: {
    titleTemplate: '%s - Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  buildModules: [
    '@vueuse/nuxt',
    'nuxt-windicss',
  ],
  privateRuntimeConfig: {
    NOTION_KEY: process.env.NOTION_KEY || 'secret_1wCZdiqZ7vhCT3atZNjxVEmbLLaD7bWr2OrG8ABKqWJ',
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID || 'b4127d82e19c4d5093a6b1cc6ea65c1e'
  }
  
})
