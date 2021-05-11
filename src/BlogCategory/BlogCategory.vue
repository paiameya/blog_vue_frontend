<template>
  <Tag>{{ cat }}</Tag>
</template>
<script>
import Tag from 'primevue/tag'
import { ref } from 'vue'
export default {
  name: 'BlogCategory',
  props: {
    category: String,
  },
  components: {
    Tag,
  },
  setup(props) {
    let cat = ref('')
    cat.value = `${props.category}`
    return {
      cat,
    }
  },
}
</script>
<style scoped>
.p-tag {
  background: #eeeeee;
  color: #80868b;
}
</style>
