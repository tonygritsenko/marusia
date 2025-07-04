// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-04',
  devtools: { enabled: true },

  srcDir: 'src/',

  runtimeConfig: {
    public: {
      apiBaseURL: process.env.API_BASE_URL
    }
  }
})
