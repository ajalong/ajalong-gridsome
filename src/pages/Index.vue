<template>
  <Layout>
    <About />

    <section class="posts">
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>

    <div>
      <div class="flex flex-wrap">
        <div class="relative pb-3/5 w-full md:flex-1 md:mr-2 bg-gray-900 h-12 mb-2"></div>
        <div class="relative pb-3/5 w-full md:flex-1 bg-gray-900 h-12 mb-2"></div>
      </div>
      <div class="relative bg-gray-900 pb-3/5 mb-2"></div>
    </div>
  </Layout>
</template>

<script>
import About from "~/components/About.vue";
import PostList from "~/components/PostList.vue";
import ImgCon from "~/components/ImgCon.vue";

export default {
  components: {
    About,
    PostList,
    ImgCon,
  },
  metaInfo: {
    title: "Alan Long | Digital Designer",
  },
};
</script>

<style >
.bottom-0 {
  bottom: 0;
}
</style>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        type
        description
        date (format: "D MMMM YYYY")
        path
      }
    }

  }
}
</page-query>
