<template>
  <div class="bg-gray-900 mt-2 sm:py-12">
    <img :src="`${imgSrc}`" :alt="`${imgAlt}`" class="sm:mx-auto sm:w-9/12" />
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