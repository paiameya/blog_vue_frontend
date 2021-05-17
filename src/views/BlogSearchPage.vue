<template>
  <div class="search-page-container">
    <Header />
    <div class="blog-container">
      <SearchLong @searchInput="handleQuery($event)" />
      <div id="fetchingBlogs" v-if="isFetching">
        <SearchBlogList :searchKey="queryparam" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import SearchLong from '@/components/SearchLong'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SearchBlogList from '@/components/SearchBlogList.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
export default {
  components: {
    SearchLong,
    SearchBlogList,
    Header,
    Footer,
  },

  setup() {
    const router = useRouter()
    const queryparam = ref('')
    const isFetching = ref(false)
    function handleQuery(query) {
      if (!query) {
        router.replace({ name: 'BlogSearchPage', query: { q: '' } })
        return
      }
      queryparam.value = query
      isFetching.value = true
      router.replace({
        name: 'BlogSearchPage',
        query: { q: encodeURIComponent(query) },
      })
    }

    return {
      handleQuery,
      isFetching,
      queryparam,
    }
  },
}
</script>

<style scoped>
.search-page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.blog-container {
  margin: auto 100px;
  flex-grow: 1;
}
#fetchingBlogs {
  margin-bottom: 2em;
}
@media (max-width: 590px) {
  .blog-container {
    margin: 0 auto;
    flex-grow: 1;
  }
}
</style>
