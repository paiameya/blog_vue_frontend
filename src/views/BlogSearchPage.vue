<template>
  <div class="search-page-container">
    <Header />
    <div class="blog-container">
      <SearchLong @searchInput="handleQuery($event)" />
      <Select @updateCategory="updateCategory($event)" />
      <div id="fetchingBlogs">
        <SearchBlogList :searchKey="queryparam" :category="category" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { ref, watch } from 'vue'
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
    const queryparam = ref(route.query.q || '')
    const isFetching = ref(true)
    const category = ref(route.query.category || '')
    const handleQuery = query => {
      isFetching.value = false
      queryparam.value = query
      router.replace({
        name: 'BlogSearchPage',
        query: {
          ...Object.assign({}, route.query, {
            q: encodeURIComponent(queryparam.value),
          }),
        },
      })
    }
    const updateCategory = changedCategory => {
      isFetching.value = false
      category.value = changedCategory
      router.replace({
        name: 'BlogSearchPage',
        query: {
          ...Object.assign({}, route.query, {
            category: encodeURIComponent(category.value),
          }),
        },
      })
    }
    watch(
      () => route.query.q,
      async newV => {
        if (newV) isFetching.value = true
        queryparam.value = newV
      }
    )
    watch(
      () => route.query.category,
      async newV => {
        if (newV) isFetching.value = true
        category.value = newV
      }
    )
    watch(queryparam, async newV => {
      if (newV) isFetching.value = true
    })
    watch(category, async newV => {
      if (newV) isFetching.value = true
    })
    return {
      handleQuery,
      isFetching,
      queryparam,
      category,
      updateCategory,
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
