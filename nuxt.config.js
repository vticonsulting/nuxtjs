export default {
  components: true,
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ['@oruga-ui/oruga/nuxt'],
  oruga: {
    includeCss: 'vars'
  },
  tailwindcss: {
    jit: true,
    exposeConfig: true
  },
  server: {
    host: "0.0.0.0"
  },
  build: {
    transpile: /@fullcalendar.*/,
  },
  serverMiddleware: ['~/server'],
  target: 'static',
  generate: {
    exclude: [/spa-fallback/],
  },
}
