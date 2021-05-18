<template>
  <div class="container">
    <search-selector
      :options="searchOptions"
      :isAsync="isLoading"
      :optionLabel="'name'"
      @onSelect="selectHandler"
      @onSearch="onSearch"
      @searchAll="searchAll"
    >
    </search-selector>
  </div>
</template>

<script>
import { ref } from 'vue'
import SearchSelector from './SearchSelector'
export default {
  name: 'search',
  components: { SearchSelector },
  setup() {
    const searchOptions = ref([])
    const isLoading = ref(false) //TODO :need to set true when calling api

    const onSearch = value => {
      console.log('on change value', value) //OnChange value of the search input
    }

    const selectHandler = value => {
      console.log('===>', value) //JSON value
    }

    const searchAll = () => {
      console.log('Search All') //TOD: need to display all published blog
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
