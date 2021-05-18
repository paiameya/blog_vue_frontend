<template>
  <BlogList @loadBlogList="loadBlogList" :blogList="blogList" />
</template>

<script>
import BlogList from './BlogList'
import { fetchBlogList } from '@/services/blogs/fetchBlogList'
import { ref } from 'vue'
export default {
  components: {
    BlogList,
  },
  props: {
    authorName: String,
  },
  setup(props) {
    const blogList = ref([])
    const page = ref(0)
    const totalBlogs = ref(0)
    const loadBlogList = () => {
      if (totalBlogs.value && blogList.value.length >= totalBlogs.value) {
        return
      }
      fetchBlogList(
        `?author=${props.authorName}&limit=13&offset=${page.value}`
      ).then(res => {
        blogList.value.push(...res.data.result)
        page.value += 1
        totalBlogs.value = res.data.count
      })
    }
    return {
      blogList,
      loadBlogList,
    }
  },
}
</script>
