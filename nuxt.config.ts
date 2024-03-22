export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
    typeCheck: true,
  },
  modules: ['nuxt-quasar-ui'],
});
