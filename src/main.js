// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.script.push({
    src: "https://unpkg.com/vue"
  })
  head.script.push({
    src: "https://unpkg.com/prismic-vue"
  })
  head.script.push({
    innerHTML: "window.prismic = {endpoint: 'https://ajalong.prismic.io/api/v2'};"
  })
  head.script.push({
    src: "https://static.cdn.prismic.io/prismic.min.js"
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
