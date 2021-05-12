<template>
  <div class="parent-container" ref="scrollComponent">
    <div v-for="blog in blogList" :key="blog._id">
      <BlogCard
        :imageURL="blog.imageURL"
        :title="blog.title"
        :summary="blog.summary"
        :authorName="blog.authorName"
        :publishedDate="blog.publishedDate"
      />
    </div>
  </div>
</template>

<script>
import BlogCard from './BlogCard'
import { ref, onBeforeMount, onMounted, onUnmounted } from 'vue'
export default {
  components: {
    BlogCard,
  },
  props: {
    blogList: Array,
    loadBlogList: Function,
  },
  setup(context) {
    const scrollComponent = ref(null)
    const handleScroll = () => {
      let element = scrollComponent.value
      if (element.getBoundingClientRect().bottom < window.innerHeight) {
        context.emit('loadBlogList')
      }
    }
    onBeforeMount(() => {
      context.emit('loadBlogList')
    })
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    return {
      scrollComponent,
    }
  },
}
</script>

<style scoped>
.parent-container {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  row-gap: 1.2rem;
}
@media (min-width: 1616px) {
  .parent-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
