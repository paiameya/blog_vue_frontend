<template>
  <div class="container">
    <Header />
    <div class="content">
      <BlogCategoryList />
      <TopLikedBlogList />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import BlogCategoryList from '@/components/BlogCategoryList'
import TopLikedBlogList from '@/components/TopLikedBlogList'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer,
    BlogCategoryList,
    TopLikedBlogList,
  },
}
</script>
<style scoped>
.container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.content {
  flex: 1;
}
</style>
