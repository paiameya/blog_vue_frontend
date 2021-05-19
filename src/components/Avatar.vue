<template>
  <div>
    <img class="img-content" :src="imageURL" alt="Avatar" />
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    imageURL: String,
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
