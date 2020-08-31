<template>
  <div class="flex">
    <div class="relative w-full md:flex-1 md:mr-2 bg-gray-900 mt-2">
      <img :src="`${imgSrc1}`" :alt="`${imgAlt1}`" class="object-cover" />
    </div>
    <div class="relative w-full md:flex-1 bg-gray-900 mt-2">
      <img :src="`${imgSrc2}`" :alt="`${imgAlt2}`" class="object-cover" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc1: {
      type: String,
    },
    imgAlt1: {
      type: String,
    },
    imgSrc2: {
      type: String,
    },
    imgAlt2: {
      type: String,
    },
  },
};
</script>