<template>
  <div>
    <div>
      <BlogCategory
        v-for="categoryName in categoriesList"
        :key="categoryName.id"
        :category="categoryName"
      />
    </div>
  </div>
</template>
<script>
import { ref, onBeforeMount } from 'vue'
import BlogCategory from '@/BlogCategory/BlogCategory'
export default {
  name: 'BlogCategoryList',
  components: {
    BlogCategory,
  },
  props: {
    categories: Array,
    // categories: { Type: Array, default: () => [] },
  },
    setup(props) {
      const categoriesList = ref([])
      onBeforeMount(() => {
        categoriesList.value = props.categories
      })
      return {
        categoriesList,
      }
    },
}
</script>
