<template>
  <div class="relative min-h-screen px-2 bg-black text-white">
    <header>
      <div class="fixed bg-black z-10 w-full">
        <div class="px-4 sm:px-8 pt-8">
          <nav class="nav">
            <div class="flex items-center py-4 space-x-8">
              <div>
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
    <About />
    <slot />
    <Footer />
  </div>
</template>

<script>
import About from "~/components/About.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    About,
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
@font-face {
  font-family: SuisseIntl;
  src: url("../assets/SuisseIntl-Regular-WebXL.woff");
  font-weight: normal;
}

body {
  font-family: "SuisseIntl", sans-serif;
  font-feature-settings: "kern";
  font-kerning: normal;
  -moz-osx-font-smoothing: grayscale;
}
html {
  font-size: 20px;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased;
}
</style>
