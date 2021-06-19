import {NuxtConfig} from '@nuxt/types'

const config: NuxtConfig = {
  target: 'static',
  components: true,
  build: {
    postcss: {
      plugins: {
        'postcss-color-gray': {},
      },
    },
  },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/color-mode',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/svg',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxt/http', 'nuxt-i18n', '@nuxtjs/axios', '@oruga-ui/oruga/nuxt'],
  plugins: ['~/plugins/vue-placeholders.js'],
  axios: {
    baseURL: 'http://0.0.0.0:3000/api',
  },
  colorMode: {
    classSuffix: '',
  },
  serverMiddleware: ['~/server'],
  googleFonts: {
    families: {
      Inter: true,
    },
  },
  i18n: {
    locales: [
      {
        code: 'es',
        file: 'es.json',
        iso: 'en-ES',
        name: 'Español',
      },
      {
        code: 'en',
        file: 'en.json',
        iso: 'en-US',
        name: 'English',
      },
    ],
    defaultLocale: 'en',
    parsePages: false,
    strategy: 'prefix_except_default',
    lazy: true,
    seo: false,
    langDir: 'locales/',
  },
  oruga: {
    includeCss: 'vars',
  },
  tailwindcss: {
    exposeConfig: true,
  },
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
  generate: {
    // interval: 2000,
    exclude: [/spa-fallback/],
  },
}

export default config
