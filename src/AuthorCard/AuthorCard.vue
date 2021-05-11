<template>
  <Card>
    <template #header>
      <img src="img" alt="John" style="width: 100%" />
    </template>
    <template #title>
      {{ name }}
    </template>
    <template #content> CEO & Founder, Example </template>
  </Card>
</template>


<script>
import Card from 'primevue/card'
import { ref } from 'vue'
export default {
  name: 'AuthorCard',
  components: {
    Card,
  },
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
.p-card {
  width: 310px;
  text-align: center;
  padding: 27px 21px 12px 21px;
}
</style>
