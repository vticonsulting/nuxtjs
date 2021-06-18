export default {
  components: true,
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ['@oruga-ui/oruga/nuxt'],
  oruga: {
    includeCss: 'vars'
  },
  tailwindcss: {
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  serverMiddleware: ['~/server'],
  target: 'static',
  generate: {
    exclude: [/spa-fallback/],
  },
};
