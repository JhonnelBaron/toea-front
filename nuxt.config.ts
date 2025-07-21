// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  plugins: [ 
    '~/plugins/axios.js',
  
  ],
    app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/toea.png' }
      ]
    }
  }
})
