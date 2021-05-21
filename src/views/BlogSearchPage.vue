<template>
  <div class="search-page-container">
    <Header />
    <div class="blog-container">
      <SearchLong @searchInput="updateSearchKey" />
      <Select @updateCategory="updateCategory" />
      <div id="fetchingBlogs">
        <SearchBlogList />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { ref, watch, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
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
    const store = useStore()
    const isFetching = ref(true)
    const searchKeyword = computed(() => {
      return store.state.searchKeyword || ''
    })
    const categoryKeyword = computed(() => {
      return store.state.categoryKeyword || ''
    })
    const updateSearchKey = () => {
      isFetching.value = false
      router.replace({
        name: 'BlogSearchPage',
        query: {
          ...Object.assign({}, route.query, {
            q: encodeURIComponent(searchKeyword.value),
          }),
        },
      })
    }
    const updateCategory = () => {
      isFetching.value = false
      router.replace({
        name: 'BlogSearchPage',
        query: {
          ...Object.assign({}, route.query, {
            category: encodeURIComponent(categoryKeyword.value),
          }),
        },
      })
    }
    onMounted(() => {
      store.dispatch('updateSearchKeyword', route.query.q || '')
      store.dispatch('updateCategoryKeyword', route.query.category || '')
    })

    watch(searchKeyword, async newV => {
      if (newV) isFetching.value = true
    })
    watch(categoryKeyword, async newV => {
      if (newV) isFetching.value = true
    })
    return {
      updateSearchKey,
      isFetching,
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
  margin: auto 18rem;
  flex-grow: 1;
}
#fetchingBlogs {
  margin-bottom: 2em;
}
@media (max-width: 420px) {
  .blog-container {
    margin: 0;
  }
}
@media (max-width: 1024px) {
  .blog-container {
    margin: auto 10rem;
  }
}
@media (max-width: 540px) {
  .blog-container {
    margin: 0;
  }
}
</style>
