<template>
  <div id="blog">
    <Header />
    <div class="card">
      <h1>{{ blogDetails.title }}</h1>
      <div class="profile-picture">
        <Avatar :imageURL="blogDetails?.author?.profilePic" />
        <div class="author-name">{{ blogDetails?.author?.name }}</div>
        <div class="date">{{ publishedDate }}</div>
      </div>
      <div class="main-content">
        <div class="likes">
          <span v-if="blogDetails.likes === 1"
            >{{ blogDetails.likes }} like</span
          >
          <span v-else>{{ blogDetails.likes }} likes</span>
        </div>
        <div class="blog-content" v-html="blogContent"></div>
        <div class="thumbs-up">
          <i class="pi pi-thumbs-up"></i>
          <i class="pi pi-down pi-thumbs-down"></i>
        </div>
        <h3>Categories</h3>
        <div class="grid-container">
          <div class="grid-item">{{ blogDetails.category }}</div>
        </div>
        <CommentList :blogId="blogId" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import CommentList from '@/components/CommentList'
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import Avatar from '@/components/Avatar.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import convertToHTML from 'markdown-to-html-converter'
import { fetchBlog } from '@/services/blogs/fetchBlog'
export default {
  name: 'BlogPage',
  components: {
    Avatar,
    Header,
    Footer,
    CommentList,
  },

  setup() {
    const blogDetails = ref([])
    const blogContent = ref('')
    const route = useRoute()
    const blogId = ref('')
    const publishedDate = ref('')
    blogId.value = route.params.id
    onBeforeMount(() => {
      fetchBlog(route.params.id).then(response => {
        blogDetails.value = response.data
        blogContent.value = convertToHTML(response.data.content)
        publishedDate.value = new Date(
          response.data.publishedDate
        ).toLocaleString()
      })
    })
    return {
      blogDetails,
      blogContent,
      publishedDate,
      blogId,
    }
  },
}
</script>

<style scoped>
#blog {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.card {
  margin: auto;
  font-family: arial;
  padding: 2em;
  width: 50em;
  flex: 1;
}
.main-content {
  text-align: left;
}
.profile-picture {
  display: flex;
}
.author-name {
  margin-left: 1em;
}
.date {
  margin-top: 2em;
  margin-left: -5em;
}
.likes {
  margin-top: 1em;
}
.blog-content {
  margin-top: 1em;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  margin-top: 1em;
}
.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
}

.thumbs-up {
  margin-top: 1em;
}

.pi-down {
  margin-left: 0.5em;
}
</style>
