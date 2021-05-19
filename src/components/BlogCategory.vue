<template>
  <Tag>{{ category }}</Tag>
</template>
<script>
import Tag from 'primevue/tag'
export default {
  name: 'BlogCategory',
  props: {
    category: Object,
  },
  components: {
    Tag,
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
