export default {
  // Target: https://go.nuxtjs.dev/config-target
  server: {
    port: 3000,
    host: '0.0.0.0',
    timing: false,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-demo',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  buildDir: 'nuxt-dist',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sentry',
  ],
  sentry: {
    dsn: 'https://145a57e3050047269d79f9fad897254a@o1065687.ingest.sentry.io/6096262',
    config: {},
  },
  extend(config, { isDev, isClient }) {
    if (isClient && !isDev) {
      config.devtool = 'source-map' // 处理client 增加sourcemap
      const release = 'demo-test23' // 可以根据package.json的版本号或者Git的tag命名
      const SentryPlugin = require('@sentry/webpack-plugin')
      config.plugins.push(
        new SentryPlugin({
          include: '.nuxt/dist/client', // 要上传的文件夹 不能写为 ./dist 因为dist文件夹是编译好再复制出来的
          release,
          configFile: 'sentry.properties', // 这里就是默认读取根目录下的 .sentryclirc文件
          debug: true, // 这个是开启调试 出了错也可以看见
          ignore: ['node_modules', 'webpack.config.js'],
          // 比如说我网站的js文件地址为为 http://plinghuang.cn/[hash].js 就是下面的配置
          urlPrefix: '~/', // ~/为网站根目录，后续路径须对应source
        })
      )
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
