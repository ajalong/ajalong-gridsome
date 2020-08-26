


<template>
  <Layout>
    <div class="px-4 sm:px-8 pt-24 pb-10 sm:py-24">
      <div class="text-xl md:text-4xl font-bold leading-snug">
        <h1>{{$page.post.title}}</h1>
        <h2 class="text-gray-600 mt-1">{{$page.post.subtitle}}</h2>
      </div>
      <div class="text-xs py-6">
        <p>{{$page.post.year}}</p>
        <p>{{$page.post.type}}</p>
      </div>
      <div>
        <p v-html="$page.post.content" />
      </div>
    </div>
  </Layout>
</template>

<script>
import About from "~/components/About.vue";

export default {
  components: {
    About,
  },
  metaInfo: {
    title: "Alan Long | Digital Designer",
  },
};
</script>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    subtitle
    year
    type
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>
