<template>
  <Layout>
    <About />
    <div v-for="edge in $page.projects.edges" :key="edge.node.id">
      <div class="mb-2">
        <g-link :to="edge.node.path">
          <div class="relative bg-gray-900 pb-1/1 sm:pb-3/5 overflow-hidden">
            <img class="absolute h-full w-full object-cover" :src="edge.node.featuredImage" />
            <div class="opacity-0 hover:opacity-100 absolute bottom-0 h-full w-full">
              <div class="absolute bottom-0 h-2/3 w-full bg-gradient-to-t from-black">
                <div class="absolute z-10 m-4 sm:m-8 bottom-0 w-full max-w-lg">
                  <span class="block">{{ edge.node.type }}</span>
                  <span class="block">{{ edge.node.excerpt }}</span>
                </div>
              </div>
            </div>
          </div>
        </g-link>
      </div>
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
        path
        type
        excerpt
        featuredImage
      }
    }
  }
}
</page-query>

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
