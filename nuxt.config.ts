// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Desactiva el renderizado del lado del servidor para exportación estática (SSG)
  ssr: false,

  compatibilityDate: '2025-07-15',

  // 1. Configuración de Proxy con Nitro
  // Esto hace que las peticiones a '/api' sean redirigidas internamente al backend
  nitro: {
    devProxy: {
      '/api': {
        target: (process as any).env.NUXT_PUBLIC_API_BASE,
        changeOrigin: true,
        prependPath: true,
      }
    }
  },

  devtools: { enabled: false },

  // 2. Variables de configuración accesibles en la app
  runtimeConfig: {
    public: {
      // Al usar el proxy, la URL base para el frontend es simplemente '/api'
      apiBase: '/api'
    }
  },

  // 3. Configuración de etiquetas Meta Globales (SEO y Autoría)
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      title: 'Afinador App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', content: 'Afinador App' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: 'Ing. Argenis Osorio' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;700;900&display=swap' }
      ]
    }
  },

  // Configuración para el despliegue estático con Nginx
  nitro: {
    serveStatic: true,
    // Asegura que todas las rutas se generen correctamente
    prerender: {
      crawlLinks: true
    }
  },

  // 4. Estilos globales y Iconos
  css: [
    'assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // 5. Módulos y Linter
  modules: ['@nuxt/eslint'],

  eslint: {
    checker: true
  }
})