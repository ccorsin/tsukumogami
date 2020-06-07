
require('dotenv').config()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'vue-wysiwyg',
    './node_modules/vue-wysiwyg/dist/vueWysiwyg.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    menu: {
      "Learn" : ["General", "Materials", "Knitting", "Weaving"],
      "Repair": ["Holes", "Buttons", "Zipper"],
      "Reshape": ["Length", "Width", "Transform"],
      "Refresh": ["Color", "Embroidery"],
      "Recycle": ["Transform", "Give"]
    },
    postDb: process.env.POST_DB,
    fileStorage: process.env.FILE_STORAGE,
    githubProject: process.env.GITHUB_PROJECT
  }
}
