export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    documentDriven: true,
  },
  tailwindcss: {
    config: {
      content: ['content/**/*.md'],
    },
  },
})
