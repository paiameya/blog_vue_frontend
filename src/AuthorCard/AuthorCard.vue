<template>
  <Card>
    <template #header>
      <img src="profilePicture" alt="John" style="width: 100%" />
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
    const profilePicture = ref('')
    const name = ref('')
    profilePicture.value = `${props.imageURL}`
    name.value = `${props.authorName}`
    return {
      profilePicture,
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
