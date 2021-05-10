<template>
    <div >
      <img class="img-content" :src="thumbnailsURL" alt="Avatar"/>
    </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
export default {
  name: "Thumbnails",
  props: {
    url: String,
  },
  setup(props) {
    let thumbnailsURL = ref("");
    onBeforeMount(async () => {
      thumbnailsURL.value = props.url;
    });
    return {
      thumbnailsURL,
    };
  },
};
</script>

<style scoped>

.img-content {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

</style>
