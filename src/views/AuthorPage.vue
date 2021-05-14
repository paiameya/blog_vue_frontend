<template>
  <div class="container">
    <Header logoURL="" :Name="authorDetails.name" />
    <div class="authorPost">
      <div class="card">
        <AuthorCard
          imageURL="https://miro.medium.com/fit/c/131/131/1*xK5kJEka8T-IfgxeG-evKg.jpeg"
          :authorName="authorDetails.name"
          authorTitle="How did it end"
        />
      </div>
    </div>
    <h1 v-for="blog in authorDetails.blogs" :key="blog.id">{{ blog.title }}</h1>
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import AuthorCard from '@/components/AuthorCard.vue'
import Footer from '@/components/Footer.vue'
import { fetchAuthorDetails } from '../services/authors/fetchAuthorDetails'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'AuthorPage',
  components: {
    AuthorCard,
    Header,
    Footer,
  },
  setup() {
    const authorDetails = ref([])
    const route = useRoute()
    onMounted(async () => {
      const response = await fetchAuthorDetails(route.params.id)
      authorDetails.value = response.data
      console.log(authorDetails)
      console.log(typeof authorDetails.value.name)
    })
    return {
      authorDetails,
    }
  },
}
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.authorPost {
  flex: 1;
}
.footer {
  width: 100%;
}
.container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>
