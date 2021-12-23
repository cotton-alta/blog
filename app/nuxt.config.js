import fs from 'fs';
import yaml from 'js-yaml';
const yaml_data = fs.readFileSync('./settings.yml', 'utf8');
const settings = yaml.load(yaml_data);

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: settings.blog_title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: settings.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/solarized-dark.min.css' }
    ]
  },

  router: {
    base: process.env.BASE_URL
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/index.scss',
    // { src: '~/node_modules/highlight.js/styles/atom-one-dark.css', lang: 'css' },
    '~/node_modules/highlight.js/styles/atom-one-dark.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/google-gtag',
    '@nuxtjs/dotenv'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
  ],

  bootstrapVue: {
    componentPlugins: [
      'LayoutPlugin',
      'NavbarPlugin',
      'CardPlugin',
      'PaginationPlugin',
      'BadgePlugin'
    ],
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  'google-gtag': {
    id: process.env.GOOGLE_ANALYTICS_ID,
    debug: false,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: {
      analyzerMode: 'static'
    },
    extend(config) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        type: 'json',
        use: 'yaml-loader'
      });
    }
  }
}
