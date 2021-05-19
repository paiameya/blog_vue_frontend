<template>
  <div class="search-page-container">
    <Header />
    <div class="blog-container">
      <SearchLong @searchInput="handleQuery($event)" />
      <Select />
      <div id="fetchingBlogs" v-if="isFetching">
        <SearchBlogList :searchKey="queryparam" :category="category" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { ref, watch,onBeforeMount } from 'vue'
import SearchLong from '@/components/SearchLong'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SearchBlogList from '@/components/SearchBlogList.vue'
import Select from '@/components/Select'

export default {
  components: {
    SearchLong,
    SearchBlogList,
    Header,
    Footer,
    Select,
  },

  setup() {
    const router = useRouter()
    const route = useRoute()
    const queryparam = ref('')
    const isFetching = ref(true)
    const category = ref()
    onBeforeMount(()=>
    {
      category.value=route.query.category
    })
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
    return {
      handleQuery,
      isFetching,
      queryparam,
      category,
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
  margin: auto 12em;
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
