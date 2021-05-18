<template>
  <BlogList @loadBlogList="loadBlogList" :blogList="blogList" />
</template>

<script>
import BlogList from './BlogList'
import { fetchBlogList } from '@/services/blogs/fetchBlogList'
import { ref, watch } from 'vue'
export default {
  components: {
    BlogList,
  },
  props: {
    searchKey: String,
    isCategory: { type: Boolean, default: false },
  },
  setup(props) {
    const blogList = ref([])
    const page = ref(0)
    const totalBlogs = ref(0)
    const loadBlogList = () => {
      if (totalBlogs.value && blogList.value.length >= totalBlogs.value) {
        return
      }
      props.isCategory
        ? fetchBlogList(
            `?category=${props.searchKey}&limit=13&offset=${page.value}`
          ).then(res => {
            blogList.value.push(...res.data.result)
            page.value += 1
            totalBlogs.value = res.data.count
          })
        : fetchBlogList(
            `?search=${props.searchKey}&limit=13&offset=${page.value}`
          ).then(res => {
            blogList.value.push(...res.data.result)
            page.value += 1
            totalBlogs.value = res.data.count
          })
    }
    watch(
      () => props.searchKey,
      async searchKey => {
        console.log(searchKey)
      }
    )
    return {
      blogList,
      loadBlogList,
    }
  },
}
</script>
