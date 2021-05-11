<template>
  <div class="card">
    <div class="container">
      <img src="img" alt="John" style="width: 100%" />
      <h4>
        <b>{{ name }}</b>
      </h4>
      <p class="title">CEO & Founder, Example</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'AuthorCard',
  props: {
    imageURL: String,
    authorName: String,
  },
  setup(props) {
    const img = ref('')
    const name = ref('')
    img.value = `${props.imageURL}`
    name.value = `${props.authorName}`
    return {
      img,
      name,
    }
  },
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 279px;
  margin: auto;
  text-align: center;
  font-family: arial;
  padding: 27px 21px 12px 21px;
}

.title {
  color: grey;
  font-size: 18px;
}

.container {
  padding: 8px 15px;
}
</style>
