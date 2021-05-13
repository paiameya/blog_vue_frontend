<template>
  <div>
    <Header
      logoURL="http://2.bp.blogspot.com/-tRdfCkaPO0A/Ui-PRJLDZlI/AAAAAAABMI8/8L9maIUroq8/s640/google-new-logo.png"
    />
    <div class="card">
      <AuthorCard
        imageURL="https://picsum.photos/200/300"
        authorName="John Bordowski"
        authorTitle="How did it end"
      />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import AuthorCard from '../components/AuthorCard.vue'
export default {
  name: 'AuthorPage',
  components: {
    AuthorCard,
    Header,
  },
}
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
