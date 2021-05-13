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
import BlogCategory from './BlogCategory'
export default {
  name: 'BlogCategoryList',
  components: {
    BlogCategory,
  },
  props: {
    categories: Array,
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
