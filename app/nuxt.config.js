const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "user-management",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["vue-json-pretty/lib/styles.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/boostap-vue-icons",
    "~/plugins/axios",
    { src: "~/plugins/filters" },
    { src: "~/plugins/modules-with-no-ssr", ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/sentry-module#usage
    "@nuxtjs/sentry",
  ],

  axios: {
    proxy: true,
  },

  proxy: {
    "/api": {
      target: process.env.ADMIM_API_URL,
      pathRewrite: { "^/api": "" },
      changeOrigin: true,
    },
  },

  env: {
    adminApiUrl: process.env.ADMIM_API_URL,
  },

  telemetry: false,

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    cssSourceMap: true,
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.devtool = "source-map";

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        });
      }
    },
  },
};
