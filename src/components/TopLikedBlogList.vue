<template>
  <BlogList @loadBlogList="loadBlogList" :blogList="blogList" />
</template>

<script>
import BlogList from './BlogList'
import { ref } from 'vue'
export default {
  components: {
    BlogList,
  },
  setup() {
    const blogList = ref([])
    const page = ref(0)
    const totalBlogs = ref(0)
    const loadBlogList = () => {
      if (totalBlogs.value && blogList.value.length >= totalBlogs.value) {
        return
      }
      fetch(
        `https://api.instantwebtools.net/v1/passenger?page=${page.value}&size=13`
      )
        .then(res => res.json())
        .then(blogs => {
          const updatedBlogList = blogs.data.splice(0, 7880)
          blogList.value.push(...updatedBlogList)
          page.value++
          totalBlogs.value = 112
        })
    }
    return {
      blogList,
      loadBlogList,
    }
  },
}
</script>
