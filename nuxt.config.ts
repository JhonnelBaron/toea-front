export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: false, // 🚀 Disable SSR (use SPA/static mode)
  target: 'static', // 🚀 Explicitly static
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  plugins: ['~/plugins/axios.js'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/toea.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  },
    nitro: {
    preset: 'static', // ✅ Make sure Nitro outputs static assets
    prerender: {
      crawlLinks: true,
      failOnError: false,   // don’t stop the build if a route fails
      ignore: ['/verify'],  // skip prerendering /verify
    }
  },
   vite: {
    build: {
      sourcemap: process.env.NODE_ENV !== 'production'
    }
  }
})