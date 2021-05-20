<template>
  <div>
    <img
      v-if="imageURL === null"
      class="img-content"
      :src="userpic"
      :alt="alt"
    />
    <img v-else class="img-content" :src="imageURL" alt="Avatar" />
  </div>
</template>

<script>
import userpic from '@/assets/userpic.jpeg'
export default {
  name: 'Avatar',
  props: {
    imageURL: String,
    alt: {
      type: String,
      default: 'Avatar',
    },
  },
  setup() {
    return {
      userpic,
    }
  },
}
</script>

<style scoped>
.img-content {
  width: 3.75em;
  height: 3.75em;
  border-radius: 50%;
}
</style>
