<template>
  <div class="relative pb-3/5 bg-gray-900 mt-2">
    <img :src="`${imgSrc}`" :alt="`${imgAlt}`" class="absolute object-cover h-full w-full" />
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