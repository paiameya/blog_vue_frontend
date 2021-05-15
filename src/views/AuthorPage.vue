<template>
  <div>
    <Header />
    <div class="container">
      <div class="authorPost">
        <div class="card" v-if="isFetching">
          <AuthorCard
            :imageURL="authorDetails.profilePicture"
            :authorName="authorDetails.name"
            authorTitle="How did it end"
          />
        </div>
      </div>
      <template class="authorPost" v-if="isFetching">
        <AuthorBlogList :authorName="authorDetails.name" />
      </template>
      <Footer class="footer" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import AuthorCard from '@/components/AuthorCard.vue'
import Footer from '@/components/Footer.vue'
import AuthorBlogList from '@/components/AuthorBlogList.vue'
import { fetchAuthorDetails } from '@/services/authors/fetchAuthorDetails'
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'AuthorPage',
  components: {
    AuthorCard,
    AuthorBlogList,
    Header,
    Footer,
  },
  setup() {
    const authorDetails = ref({})
    const route = useRoute()
    const isFetching = ref(false)
    onBeforeMount(() => {
      fetchAuthorDetails(route.params.id).then(response => {
        authorDetails.value = response.data
        isFetching.value = true
        console.log(authorDetails)
      })
    })
    return {
      authorDetails,
      isFetching,
    }
  },
}
</script>

<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
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
  min-height: 90vh;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
</style>
