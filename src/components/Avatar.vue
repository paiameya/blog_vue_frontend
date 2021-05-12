<template>
  <div>
    <img class="img-content" :src="AvatarURL" alt="Avatar" />
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
export default {
  name: 'Avatar',
  props: {
    imageURL: String,
  },
  setup(props) {
    const AvatarURL = ref('')
    onBeforeMount(() => {
      AvatarURL.value = props.imageURL
    })
    return {
      AvatarURL,
    }
  },
}
</script>

<style scoped>
.img-content {
  width: 3.750em;
  height: 3.750em;
  border-radius: 50%;
}
</style>
