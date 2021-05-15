<template>
  <div>
    <div>
      <BlogCategory
        v-for="categoryName in categoryList"
        :key="categoryName.id"
        :category="categoryName"
      />
    </div>
    <!-- {{ categoryList }} -->
  </div>
</template>
<script>
import { ref, onBeforeMount } from 'vue'
import BlogCategory from './BlogCategory'
import { fetchCategory } from '../services/categories/fetchCategoryList'
export default {
  name: 'BlogCategoryList',
  components: {
    BlogCategory,
  },
  setup() {
    const categoryList = ref([])
    onBeforeMount(() => {
      fetchCategory().then(response => {
        categoryList.value = response.data
      })
    })
    return {
      categoryList,
    }
  },
}
</script>
