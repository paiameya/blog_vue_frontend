<template>
  <div class="container">
    <search-selector
      :options="searchOptions"
      :isAsync="isLoading"
      :optionLabel="'title'"
      @onSelect="selectHandler"
      @onSearch="onSearch"
      @searchAll="searchAll"
    >
    </search-selector>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SearchSelector from './SearchSelector'
import { fetchBlogList } from '@/services/blogs'

export default {
  name: 'search',
  components: { SearchSelector },

  setup() {
    const searchOptions = ref([])
    const isLoading = ref(false)
    const router = useRouter()

    const onSearch = value => {
      isLoading.value = true
      fetchBlogList(`?search=${value.trim().toLowerCase()}&limit=3`)
        .then(res => {
          searchOptions.value = res?.data?.result || []
          isLoading.value = false
        })
        .catch(() => {
          isLoading.value = false
        })
    }

    const selectHandler = value => {
      let selected = JSON.parse(value)
      if (selected?.id) {
        router.push({ name: 'BlogPage', params: { id: selected.id } })
      } else {
        router.push(`/search?q=${selected}`)
      }
    }

    const searchAll = () => {
      router.push(`/search`)
    }

    return {
      isLoading,
      searchOptions,
      selectHandler,
      onSearch,
      searchAll,
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: flex-end;
}
.search:hover {
  cursor: pointer;
}
</style>
