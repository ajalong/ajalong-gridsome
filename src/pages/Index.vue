<template>
  <Layout>
    <About />
    <div class="p6-6 bg-black">
      <div class="relative mb-2">
        <g-link to="/about/">
          <div class="bg-gray-900 pb-1/1 sm:pb-3/5 overflow-hidden">
            <g-image class="absolute h-full w-full object-cover" src="~/assets/ovsi.png" />
            <div class="opacity-0 hover:opacity-100 absolute bottom-0 h-full w-full">
              <div class="absolute bottom-0 h-2/3 w-full bg-gradient-to-t from-black">
                <div class="absolute z-10 m-4 sm:m-8 bottom-0 max-w-lg">
                  <p class="sm:mb-1">Branding & Web design</p>
                  <p class="hidden sm:inline text-xl text-white text-opacity-60 leading-snug">
                    OVSI an international team designing a
                    ventilator and concentrator for
                    lower income countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </g-link>
      </div>
      <div class="flex flex-wrap">
        <div class="relative pb-3/5 w-full md:flex-1 md:mr-2 bg-gray-900 h-12 mb-2"></div>
        <div class="relative pb-3/5 w-full md:flex-1 bg-gray-900 h-12 mb-2"></div>
      </div>
      <div class="relative bg-gray-900 pb-3/5 mb-2">
        <g-image class="absolute h-full w-full object-cover" src="~/assets/ovsi.png" />
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
