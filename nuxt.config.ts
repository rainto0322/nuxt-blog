// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: { host: '0.0.0.0' },
  modules: ['@unocss/nuxt', '@nuxt/icon'],
  icon:{
    size:'24px',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false }
})