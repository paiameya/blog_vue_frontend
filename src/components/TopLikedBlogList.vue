<template>
  <BlogList @loadMore="loadMore" :blogList="blogList" />
</template>

<script>
import BlogList from './BlogList'
import { fetchBlogList } from '@/services/blogs/fetchBlogList'
import { onMounted, ref } from 'vue'
export default {
  components: {
    BlogList,
  },
  setup() {
    const blogList = ref([])
    const page = ref(0)
    const totalBlogs = ref(0)
    const limit = 10
    const loadBlogList = () => {
      if (totalBlogs.value && blogList.value.length >= totalBlogs.value) {
        return
      }
      fetchBlogList(
        `?sortBy=likeCount&sortOrder=desc&limit=${limit}&offset=${page.value}`
      ).then(res => {
        blogList.value.push(...res.data.result)
        totalBlogs.value = res.data.count
      })
    }
    onMounted(() => {
      loadBlogList()
    })
    const loadMore = () => {
      page.value = Math.ceil(blogList.value.length / 10) * limit
      loadBlogList()
    }
    return {
      blogList,
      loadMore,
    }
  },
}
</script>
