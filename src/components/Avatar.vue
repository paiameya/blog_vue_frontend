<template>
  <div>
    <img class="img-content" :src="AvatarURL" alt="Avatar" />
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    imageURL: String,
  },
  setup(props) {
    return {
      AvatarURL: props.imageURL,
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
