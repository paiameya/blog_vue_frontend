<template>
  <Tag @click="handleCategoryListClick">{{ categoryName }}</Tag>
</template>
<script>
import Tag from 'primevue/tag'
import { ref } from 'vue'
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
    const categoryName = ref('')
    const router = useRouter()
    categoryName.value = `${props.category.name}`
    const handleCategoryListClick = () => {
      router.push(`/search?q=${categoryName.value}&category=true`)
    }
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
