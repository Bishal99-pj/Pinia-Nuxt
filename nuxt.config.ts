// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt"],
  pinia: {
    autoImports : ['defineStore', 'storeToRefs'],
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
});
