<template>
  <div class="parent-container" ref="scrollComponent">
    <div v-for="blog in blogList" :key="blog.id">
      <BlogCard
        :blogId="blog.id"
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
import { ref, onMounted, onUnmounted } from 'vue'
export default {
  components: {
    BlogCard,
  },
  props: {
    blogList: Object,
  },
  setup(_, context) {
    const scrollComponent = ref(null)
    const handleScroll = () => {
      if (
        scrollComponent.value.getBoundingClientRect().bottom <
        window.innerHeight
      ) {
        context.emit('loadMore')
      }
    }
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
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  row-gap: 1.2rem;
  justify-content: center;
  margin-left: 2.5rem;
}
@media (min-width: 1616px) {
  .parent-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 320px) {
  .parent-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 360px) {
  .parent-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 375px) {
  .parent-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (width: 768px) {
  .parent-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (width: 1024px) {
  .parent-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
