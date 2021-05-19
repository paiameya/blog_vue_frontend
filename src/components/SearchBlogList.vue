<template>
  <BlogList @loadBlogList="loadBlogList" :blogList="blogList" />
</template>

<script>
import BlogList from './BlogList'
import { fetchBlogList } from '@/services/blogs/fetchBlogList'
import { ref, watch, computed } from 'vue'
// import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components: {
    BlogList,
  },
  props: {
    searchKey: String,
  },
  setup(props) {
    const store = useStore()
    // const route = useRoute()
    const blogList = ref([])
    const page = ref(0)
    const totalBlogs = ref(0)
    const searchKeyword = computed(() => {
      return store.getters.searchKeyword
    })
    const loadBlogList = () => {
      if (totalBlogs.value && blogList.value.length >= totalBlogs.value) {
        return
      }
      fetchBlogList(
        `?search=${searchKeyword.value}&limit=13&offset=${page.value}`
      ).then(res => {
        blogList.value.push(...res.data.result)
        page.value += 1
        totalBlogs.value = res.data.count
      })
    }
    watch(
      () => props.searchKey,
      async () => {
        console.log(props.searchKey)
      }
    )
    return {
      blogList,
      loadBlogList,
      searchKeyword,
    }
  },
}
</script>
