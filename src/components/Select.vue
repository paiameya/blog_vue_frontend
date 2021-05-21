<template>
  <div class="drop-down-container">
    <select v-model="selectedCategory" class="drop-down">
      <option value="" label="Select a Category">Select a Category</option>
      <option
        v-for="category in categories"
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
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const categories = ref([])
    const selectedCategory = ref(null)
    onBeforeMount(() => {
      fetchCategory().then(response => {
        categories.value = response.data
      })
    })
    onMounted(() => {
      store.dispatch('updateCategoryKeyword', selectedCategory.value)
    })
    selectedCategory.value = route.query.category
    store.dispatch('updateCategoryKeyword', selectedCategory.value)
    watch(selectedCategory, changedCategory => {
      store.dispatch('updateCategoryKeyword', changedCategory)
    })
    return {
      categories,
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
