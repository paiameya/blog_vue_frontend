<template>
  <div class="container">
    <search-selector
      :options="searchOptions"
      :isAsync="isLoading"
      @onSelect="selectHandler"
      @onSearch="onSearch"
      :optionLabel="'name'"
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
    const selected = ref('')
    const serachValue = ref('')
    const searchOptions = ref([
      {
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
        key: 'react js',
        date: Date.now(),
      },
      {
        name: 'simply dummy text of the printing and typesetting industry',
        key: 'vue js',
        date: Date.now(),
      },

      {
        name: 'simply dummy text of the printing and typesetting industry',
        key: 'vue js',
        date: Date.now(),
      },
    ])
    const isLoading = ref(false) //TODO :need to set true when calling api

    const onSearch = value => {
      console.log('on change value', value) //OnChange value of the search input
    }

    const selectHandler = value => {
      console.log('===>', value) //JSON value
    }

    return {
      selected,
      serachValue,
      searchOptions,
      selectHandler,
      onSearch,
      isLoading,
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: flex-end;
}
</style>
