<template>
  <g-image :src="`${color}`" />
</template>

<script>
export default {
  props: {
    color: {
      type: String,
    },
  },
};
</script>