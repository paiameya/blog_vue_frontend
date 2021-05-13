<template>
  <Card>
    <template #header>
      <Avatar :imageURL="profilePicture" />
    </template>
    <template #title>
      {{ name }}
    </template>
    <template #content> {{ title }} </template>
  </Card>
</template>

<script>
import Avatar from './Avatar'
import Card from 'primevue/card'
import { ref, onBeforeMount } from 'vue'
export default {
  name: 'AuthorCard',
  components: {
    Card,
    Avatar,
  },
  props: {
    imageURL: String,
    authorName: String,
    authorTitle: String,
  },
  setup(props) {
    const profilePicture = ref('')
    const name = ref('')
    const title = ref('')
    onBeforeMount(() => {
      profilePicture.value = props.imageURL
      name.value = props.authorName
      title.value = props.authorTitle
    })

    return {
      profilePicture,
      name,
      title,
    }
  },
}
</script>

<style scoped>
.p-card {
  width: 310px;
  text-align: center;
  padding: 1em;
}
</style>
