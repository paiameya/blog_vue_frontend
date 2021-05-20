<template>
  <div class="parent-container" ref="scrollComponent">
    <div v-for="blog in blogList" :key="blog.id">
      <BlogCard
        :blogId="blog.id"
        :imageURL="blog.image"
        :title="blog.title"
        :summary="blog.summary"
        :authorName="blog.author.name"
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
  column-gap: 2rem;
  justify-content: center;
}
.blog-card-container {
  display: flex;
  justify-content: center;
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
@media (max-width: 1599px) {
  .parent-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 892px) {
  .parent-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 822px) {
  .parent-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
