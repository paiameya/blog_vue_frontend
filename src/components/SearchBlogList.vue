<template>
  <BlogList @loadMore="loadMore" :blogList="blogList" />
</template>

<script>
import BlogList from './BlogList'
import { fetchBlogList } from '@/services/blogs/fetchBlogList'
import { ref, watch, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {
    BlogList,
  },
  setup() {
    const store = useStore()
    const blogList = ref([])
    const page = ref(0)
    const totalBlogs = ref(0)
    const pageLength = ref(10)
    const limit = 10

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
    const loadMore = () => {
      page.value = Math.ceil(blogList.value.length / 10) * limit
      loadBlogList()
    }
    onMounted(() => {
      loadBlogList()
    })
    const searchKeyword = computed(() => {
      return store.state.searchKeyword || ''
    })
    const categoryKeyword = computed(() => {
      return store.state.categoryKeyword || ''
    })

    watch(searchKeyword, async updatedSearchKey => {
      console.log(updatedSearchKey)
      totalBlogs.value = 0
      blogList.value = []
      searchKeyword.value = updatedSearchKey
      loadBlogList()
    })
    watch(categoryKeyword, async updatedCategoryKey => {
      totalBlogs.value = 0
      blogList.value = []
      categoryKeyword.value = updatedCategoryKey || ''
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
