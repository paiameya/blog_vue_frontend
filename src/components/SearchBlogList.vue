<template>
  <BlogList @loadMore="loadMore" :blogList="blogList" />
</template>

<script>
import BlogList from './BlogList'
import { fetchBlogList } from '@/services/blogs/fetchBlogList'
import { ref, watch, toRefs, onMounted } from 'vue'
import { useRoute } from 'vue-router'
export default {
  components: {
    BlogList,
  },
  props: {
    searchKey: String,
    category: String,
  },
  setup(props) {
    const route = useRoute()
    const { searchKey, category } = toRefs(props)
    const blogList = ref([])
    const searchKeyword = ref('')
    const categoryKeyword = ref(route.query.category)
    const page = ref(0)
    const totalBlogs = ref(0)
    const pageLength = ref(10)

    const loadBlogList = () => {
      if (totalBlogs.value && blogList.value.length >= totalBlogs.value) {
        return
      }
      fetchBlogList(
        `?search=${searchKeyword.value}&category=${categoryKeyword.value}&limit=${pageLength.value}&offset=${page.value}`
      ).then(res => {
        blogList.value.push(...res.data.result)
        totalBlogs.value = res.data.count
      })
    }
    loadBlogList()
    const loadMore = () => {
      page.value = Math.ceil(blogList.value.length / 10)
      loadBlogList()
    }
    onMounted(() => {
      loadBlogList()
    })
    watch(searchKey, async updatedSearchKey => {
      totalBlogs.value = 0
      blogList.value = []
      searchKeyword.value = updatedSearchKey
      loadBlogList()
    })
    watch(category, async updatedCategoryKey => {
      totalBlogs.value = 0
      blogList.value = []
      categoryKeyword.value = updatedCategoryKey
      loadBlogList()
    })
    return {
      blogList,
      loadBlogList,
      loadMore,
    }
  },
}
</script>
