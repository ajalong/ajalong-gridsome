<template>
  <div class="min-h-screen bg-black">
    <div class="relative max-w-screen-xl bg-black text-white px-2">
      <header>
        <div class="fixed left-0 bg-black z-40 w-full max-w-screen-xl">
          <div class="px-4 sm:px-8 sm:pt-8">
            <nav class="nav">
              <div class="flex items-center py-4 space-x-4 md:space-x-8">
                <div>
                  <g-link class="text-white" to="/">{{ $static.metadata.siteName }}</g-link>
                </div>
                <div class>
                  <span class="text-white text-gray-600 inline">Digital designer</span>
                  <span
                    class="text-white text-gray-600 hidden sm:inline ml-1"
                  >with development skills</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <slot />
      <Footer />
    </div>
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
  color: #fff;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased;
}

.bottom-0 {
  bottom: 0;
}

a {
  color: #757575;
  text-decoration: none !important;
}

a:hover {
  text-decoration: underline !important;
  color: #fff;
}
</style>
