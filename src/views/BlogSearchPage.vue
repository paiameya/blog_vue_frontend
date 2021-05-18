<template>
  <div class="search-page-container">
    <Header />
    <div class="blog-container">
      <SearchLong @searchInput="handleQuery($event)" />
      <div id="fetchingBlogs" v-if="isFetching">
        <SearchBlogList :searchKey="queryparam" :isCategory="isCategory" />
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
import { useRouter, useRoute } from 'vue-router'
import { ref, watch, onBeforeMount } from 'vue'
export default {
  components: {
    SearchLong,
    SearchBlogList,
    Header,
    Footer,
  },

  setup() {
    const router = useRouter()
    const route = useRoute()
    const queryparam = ref('')
    const isFetching = ref(false)
    const isCategory = ref(false)
    function handleQuery(query) {
      isFetching.value = false
      if (!query) {
        router.replace({ name: 'BlogSearchPage', query: { q: '' } })
        return
      }
      queryparam.value = query
      router.replace({
        name: 'BlogSearchPage',
        query: { q: encodeURIComponent(query) },
      })
    }
    watch(
      () => route.params.q,
      async q => {
        if (q) isFetching.value = true
        queryparam.value = q
      }
    )
    onBeforeMount(() => {
      isCategory.value = route.query.category
    })
    return {
      handleQuery,
      isFetching,
      queryparam,
      isCategory,
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
