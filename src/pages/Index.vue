<template>
  <Layout>
    <About />
    <div v-for="edge in $page.projects.edges" :key="edge.node.id">
      <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
    </div>
    <div class="flex flex-wrap">
      <div class="relative pb-3/5 w-full md:flex-1 md:mr-2 bg-gray-900 h-12 mb-2"></div>
      <div class="relative pb-3/5 w-full md:flex-1 bg-gray-900 h-12 mb-2"></div>
    </div>
    <div class="relative bg-gray-900 pb-3/5 mb-2"></div>
  </Layout>
</template>

<page-query>
query Projects {
  projects: allProjects {
    edges {
      node {
        title
        path
      }
    }
  }
}
</page-query>

<style>
.bottom-0 {
  bottom: 0;
}
</style>

<script>
import About from "~/components/About.vue";
import PostList from "~/components/PostList.vue";

export default {
  components: {
    About,
  },
  metaInfo: {
    title: "Alan Long | Digital Designer",
  },
};
</script>
