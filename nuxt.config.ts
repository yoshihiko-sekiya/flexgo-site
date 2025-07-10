// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // もともとの設定は残して OK
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  // ここを上書き  
  modules: ['v-gsap-nuxt'],      // @nuxt/content は消す
  css: ['~/assets/css/main.scss'],

  app: {
    head: {
      title: 'FLEX GO.',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
