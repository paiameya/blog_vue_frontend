<template>
  <div class="drop-down-container">
    <select v-model="selectedCategory" class="drop-down">
      <option value="undefined">Select a Category</option>
      <option
        v-for="category in categorys"
        :key="category.id"
        :value="category.name"
      >
        {{ category.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { fetchCategory } from '@/services/categories/fetchCategoryList'
import { onBeforeMount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const categorys = ref([])
const selectedCategory = ref(null)

export default {
  setup(_, context) {
    const route = useRoute()
    onBeforeMount(() => {
      fetchCategory().then(response => {
        categorys.value = response.data
      })
    })
    onMounted(() => {
      context.emit('updateCategory', selectedCategory.value)
    })
    selectedCategory.value = route.query.category
    context.emit('updateCategory', selectedCategory.value)
    watch(selectedCategory, changedCategory => {
      context.emit('updateCategory', changedCategory)
    })
    return {
      categorys,
      selectedCategory,
    }
  },
}
</script>

<style scoped>
.drop-down-container {
  margin: 1rem 2.8rem;
}
.drop-down {
  width: 12rem;
  height: 2rem;
}
@media (max-width: 420px) {
  .drop-down {
    height: 1.5rem;
  }
  .drop-down-container {
    margin: 1rem 1.4rem;
  }
}
</style>
