<template>
  <div class="search-page-container">
    <Header />
    <div class="blog-container">
      <SearchLong @searchInput="handleQuery($event)" />
    </div>
    <Footer />
  </div>
</template>

<script>
import SearchLong from '@/components/SearchLong'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useRouter } from 'vue-router'
export default {
  components: {
    SearchLong,
    Header,
    Footer,
  },

  setup() {
    const router = useRouter()
    function handleQuery(query) {
      if (!query) {
        router.replace({ name: 'BlogSearchPage', query: { q: '' } })
      } else {
        router.replace({
          name: 'BlogSearchPage',
          query: { q: encodeURIComponent(query) },
        })
      }
    }

    return {
      handleQuery,
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
  max-width: 1000px !important;
  margin: 0 auto;
  width: 100%;
  flex-grow: 1;
}
</style>
