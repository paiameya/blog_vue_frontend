<template>
  <Tag @click="handleCategoryListClick">{{ categoryName }}</Tag>
</template>
<script>
import Tag from 'primevue/tag'
import { ref, toRefs, watch } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'BlogCategory',
  props: {
    category: Object,
  },
  components: {
    Tag,
  },
  setup(props) {
    const { category } = toRefs(props)
    const categoryName = ref(category.value.name)
    const router = useRouter()
    const handleCategoryListClick = () => {
      router.push(`/search?category=${categoryName.value}`)
    }
    watch(
      category.value,
      changedCategory => {
        categoryName.value = changedCategory.name
      },
      { deep: true }
    )
    return {
      categoryName,
      handleCategoryListClick,
    }
  },
}
</script>
<style scoped>
.p-tag {
  background: var(--surface-200);
  color: var(--surface-700);
  margin: 0.5em;
  cursor: pointer;
}
</style>
