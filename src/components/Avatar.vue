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
    url: String,
  },
  setup(props) {
    let AvatarURL = ref('')
    onBeforeMount(async () => {
      AvatarURL.value = props.url
    })
    return {
      AvatarURL,
    }
  },
}
</script>

<style scoped>
.img-content {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>
