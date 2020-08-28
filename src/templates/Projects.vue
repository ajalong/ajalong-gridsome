<template>
  <Layout>
    <div class="px-4 sm:px-8 py-12 sm:pt-24 sm:pb-12">
      <div class="text-xl md:text-4xl leading-snug my-8">
        <h1>{{ $page.projects.title }}</h1>
        <h2 class="text-gray-600">{{ $page.projects.subtitle }}</h2>
      </div>
      <div>
        <span class="block">{{ $page.projects.type }}</span>
        <span class="block">{{ $page.projects.year }}</span>
      </div>
    </div>
    <div class="px-4 sm:px-8">
      <VueRemarkContent />
    </div>
  </Layout>
</template>

<page-query>

query Projects($id: ID!) {
  projects(id: $id) {
        title
        subtitle
        type
        year
  }
}

</page-query>

<style>
p {
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    width: 66.666667%;
  }
}
h3 {
  margin-bottom: 0.75rem;
}
a {
  color: #fff;
  text-decoration: underline;
}
</style>