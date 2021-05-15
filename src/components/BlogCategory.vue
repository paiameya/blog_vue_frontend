<template>
  <Tag>{{ categoryName }}</Tag>
</template>
<script>
import Tag from 'primevue/tag'
import { ref } from 'vue'
export default {
  name: 'BlogCategory',
  props: {
    category: { Array },
  },
  components: {
    Tag,
  },
  setup(props) {
    const categoryName = ref('')
    categoryName.value = `${props.category.name}`
    return {
      categoryName,
    }
  },
}
</script>
<style scoped>
.p-tag {
  background: var(--surface-200);
  color: var(--surface-700);
  margin: 0.5em;
}
</style>
