<template>
  <div class="h-screen">
    <About />
    <div class="absolute bottom-0 px-8 py-4 pb-12 text-white text-opacity-60 hover:underline">
      <a href="https://github.com/ajalong/ajalong-gridsome" target="_blank">
        <span>Static site built with Gridsome, Tailwindcss and deployed on Netlify.</span>
        <svg class="h-4 w-4 fill-current inline ml-2" viewBox="0 0 16 20">
          <path
            d="M11 0l1.781 1.781-.5.5-4 4L7.593 7l1.406 1.406.719-.688 4-4 .5-.5 1.781 1.781v-5h-5zM0 2v14h14V8h-2v6H2V4h6V2H0z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import About from "~/components/About.vue";

export default {
  components: {
    About,
  },
};
</script>