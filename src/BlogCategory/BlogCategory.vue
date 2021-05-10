<template>
  <Tag>{{ category }}</Tag>
</template>
<script>
import Tag from 'primevue/tag';
export default {
  name: 'BlogCategory',
  components: {
    Tag
  },
  props: {
    category: String,
  },
}
</script>
<style scoped>
.p-tag {
    background: #eeeeee;
    color: #80868b;
    }
</style>