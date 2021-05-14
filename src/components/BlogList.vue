<template>
  <div class="parent-container" ref="scrollComponent">
    <div v-for="blog in blogList" :key="blog.id">
      <BlogCard
        :imageURL="blog.image"
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
  setup(_, context) {
    const scrollComponent = ref(null)
    const handleScroll = () => {
      if (
        scrollComponent.value.getBoundingClientRect().bottom <
        window.innerHeight
      ) {
        context.emit('loadBlogList')
      }
    }
    onBeforeMount(() => {
      context.emit('loadBlogList')
    })
    onMounted(() => {
      let timeout
      window.addEventListener('scroll', function () {
        if (timeout) {
          window.clearTimeout(timeout)
        }
        timeout = window.setTimeout(function () {
          handleScroll()
        }, 400)
      })
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
