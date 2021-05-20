<template>
  <div>
    <Header class="header" />
    <div class="container">
      <div class="authorPost">
        <div class="card" v-if="isFetching">
          <AuthorCard
            :imageURL="authorDetails.profilePicture"
            :authorName="authorDetails.name"
            :authorTitle="authorDetails.bio"
          />
        </div>
      </div>
      <template class="blogList" v-if="isFetching">
        <AuthorBlogList :authorName="authorDetails.name" />
      </template>
    </div>
    <Footer class="footer" />
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
  margin-bottom: 10%;
}
.footer {
  width: 100%;
  margin-top: 5%;
}

.container {
  display: flex;
  min-height: 90vh;
  flex-direction: column;
  width: 100%;
  flex: 1;
  align-items: center;
}
@media (min-height: 1366px) {
  .container {
    min-height: 93vh;
    overflow-x: hidden;
  }
}
</style>
