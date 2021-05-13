<template>
  <Header />
  <SearchLong @searchInput="handleQuery($event)" />
</template>

<script>
import SearchLong from '../components/SearchLong'
import Header from '../components/Header'
import { useRouter } from 'vue-router'
export default {
  components: {
    SearchLong,
    Header,
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
