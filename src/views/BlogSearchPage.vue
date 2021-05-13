<template>
  <SearchLong @searchInput="handleQuery($event)" />
</template>

<script>
import SearchLong from '../components/SearchLong'
import { useRouter } from 'vue-router'
export default {
  components: {
    SearchLong,
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
