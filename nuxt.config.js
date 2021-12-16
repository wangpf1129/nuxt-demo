export default {
  // Target: https://go.nuxtjs.dev/config-target
  server: {
    host: '127.0.0.1',
    port: 3333,
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
    tracing: {
      // 以下是性能监控默认配置
      tracesSampleRate: 1.0,
      vueOptions: {
        tracing: true,
        tracingOptions: {
          hooks: ['mount', 'update'],
          timeout: 2000,
          trackComponents: true,
        },
      },
      browserOptions: {},
    },
    config: {
      environment:
        process.env.NODE_ENV === 'prod' ? 'production' : 'development',
    },
    clientIntegrations: {
      Vue: {
        attachProps: true, // 允许Sentry上报Vue组件Props
        logErrors: true, // 引入Sentry SDK后，默认不会将报错打印到控制台，将logErrors设为true强制将报错打印到控制台
      },
    },
    release: 'test1.0',
  },
  extend(config, { isDev, isClient }) {
    if (isClient) {
      const SentryWebpackPlugin = require('@sentry/webpack-plugin')
      config.plugins.push(
        new SentryWebpackPlugin({
          include: './nuxt-dist/dist/client', // 要上传的文件夹 不能写为 ./dist 因为dist文件夹是编译好再复制出来的
          configFile: 'sentry.properties', // 这里就是默认读取根目录下的 .sentryclirc文件
          release: 'test1.0',
          debug: true, // 这个是开启调试 出了错也可以看见
          ignore: ['node_modules', 'webpack.config.js'],
          // 比如说我网站的js文件地址为为 http://plinghuang.cn/[hash].js 就是下面的配置
          urlPrefix: '~/', // ~/为网站根目录，后续路径须对应source
          cleanArtifacts: true,
        })
      )
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
