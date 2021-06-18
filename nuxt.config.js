export default {
  serverMiddleware: ["~/server"],
  target: "static",
  generate: {
    exclude: [/spa-fallback/],
  },
};
