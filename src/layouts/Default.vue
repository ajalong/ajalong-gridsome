<template>
  <div>
    <header>
      <div class="fixed z-10 w-full bg-black">
        <div class="px-6 pt-4">
          <nav class="nav">
            <div class="flex items-center py-4 space-x-8">
              <div class="text-white">
                <g-link to="/">{{ $static.metadata.siteName }}</g-link>
              </div>
              <div class="hidden sm:inline">
                <p class="text-white text-opacity-60">Digital designer with development skills</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <Footer />
    <slot />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: "Suisse Int'l Trial", "Roboto", Arial, sans-serif;
}
html {
  font-size: 20px;
}
</style>
