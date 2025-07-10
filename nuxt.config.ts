export default defineNuxtConfig({
  compatibilityDate: '2025-07-04',
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['~/assets/styles/main.less'],

  runtimeConfig: {
    public: {
      apiBaseURL: process.env.API_BASE_URL
    }
  },

  image: {
    dirs: ['public'],
  },

  modules: ['@nuxt/icon', '@nuxt/image']
})