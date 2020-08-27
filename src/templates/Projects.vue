<template>
  <Layout>
    <div class="px-4 sm:px-8 py-12 sm:py-24">
      <h1>{{ $page.projects.title }}</h1>
      <h2>{{ $page.projects.subtitle }}</h2>
      <VueRemarkContent>
        <template v-slot:ImgVertical>
          <ImgVertical />
        </template>
      </VueRemarkContent>
    </div>
  </Layout>
</template>

<page-query>

query Projects($id: ID!) {
  projects(id: $id) {
        title
        subtitle
  }
}

</page-query>

<script>
import ImgVertical from "~/components/ImgVertical.vue";

export default {
  components: {
    ImgVertical,
  },
};
</script>