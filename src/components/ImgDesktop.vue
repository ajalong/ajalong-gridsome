<template>
  <div class="bg-gray-900 mt-2 sm:py-12">
    <div
      class="hidden sm:block sm:shadow-lg rounded-sm rounded-b-none sm:w-9/12 h-2 md:h-3 bg-gray-400 sm:mx-auto"
    />
    <img :src="`${imgSrc}`" :alt="`${imgAlt}`" class="sm:mx-auto sm:w-9/12 sm:shadow-lg" />
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
    },
    imgAlt: String,
  },
};
</script>