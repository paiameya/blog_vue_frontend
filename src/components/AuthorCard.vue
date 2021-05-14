<template>
  <Card>
    <template #header>
      <Avatar :imageURL="imageURL" />
    </template>
    <template #title>
      {{ authorName }}
    </template>
    <template #content> {{ authorTitle }} </template>
  </Card>
</template>

<script>
import Avatar from './Avatar'
import Card from 'primevue/card'
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
}
</script>

<style scoped>
.p-card {
  width: 310px;
  text-align: center;
  padding: 1em;
}
</style>
