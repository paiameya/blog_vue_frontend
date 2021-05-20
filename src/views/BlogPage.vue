<template>
  <div id="blog">
    <Header />
    <div class="card">
      <h1>{{ blogDetails.title }}</h1>
      <div class="profile-picture">
        <Avatar :imageURL="blogDetails?.author?.profilePic" />
        <div class="card-content">
          <div class="author-name">{{ blogDetails?.author?.name }}</div>
          <div class="date">{{ publishedDate }}</div>
        </div>
      </div>
      <div class="images">
        <img :src="blogDetails.image" />
      </div>
      <div class="main-content">
        <div class="likes">
          <span v-if="blogDetails.likeCount === 1"
            >{{ blogDetails.likeCount }} like</span
          >
          <span v-else>{{ blogDetails.likeCount }} likes</span>
        </div>
        <div class="blog-content" v-html="blogContent"></div>
        <div class="thumbs-up">
          <div @click="putLikes()" :class="{ active: isBlogLiked }">
            <i class="pi pi-thumbs-up"></i>
          </div>
          <div @click="putDislikes()" :class="{ inactive: isBlogDisliked }">
            <i class="pi pi-down pi-thumbs-down"></i>
          </div>
        </div>
        <h3>Categories</h3>
        <BlogCategory :category="blogDetails.category" />
        <CommentBox :blogId="blogId" />
        <CommentList :blogId="blogId" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import CommentList from '@/components/CommentList'
import CommentBox from '@/components/CommentBox'
import BlogCategory from '@/components/BlogCategory'
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import Avatar from '@/components/Avatar.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import convertToHTML from 'markdown-to-html-converter'
import { fetchBlog } from '@/services/blogs/fetchBlog'
import { putLikesOnBlog } from '@/services/blogs/putLikesOnBlog'
import { getUserLikesOnBlog } from '../services/blogs/getUserLikes'
import store from '../store/index'
export default {
  name: 'BlogPage',
  components: {
    Avatar,
    Header,
    Footer,
    CommentList,
    CommentBox,
    BlogCategory,
  },

  setup() {
    const blogDetails = ref([])
    const blogContent = ref('')
    const route = useRoute()
    const blogId = ref('')
    const publishedDate = ref('')
    const isBlogLiked = ref(false)
    const isBlogDisliked = ref(false)
    blogId.value = route.params.id
    const userId = store.getters.userId

    const fetchBlogDetails = () => {
      fetchBlog(route.params.id).then(response => {
        blogDetails.value = response.data
        blogContent.value = convertToHTML(response.data.content)
        publishedDate.value = new Date(
          response.data.publishedDate
        ).toLocaleString()
      })
    }
    onBeforeMount(() => {
      fetchBlogDetails()
      getUserLikesOnBlog(route.params.id, userId).then(response => {
        if (response.data === 'thumbs up') isBlogLiked.value = true
        if (response.data === 'thumbs down') isBlogDisliked.value = true
      })
    })
    const putLikes = () => {
      if (isBlogLiked.value) {
        putLikesOnBlog(route.params.id, userId, 0).then(() => {
          fetchBlogDetails()
        })
        isBlogLiked.value = false
      } else {
        isBlogLiked.value = true
        isBlogDisliked.value = false
        putLikesOnBlog(route.params.id, userId, 1)
      }
    }

    const putDislikes = () => {
      if (isBlogDisliked.value) {
        isBlogDisliked.value = false
        putLikesOnBlog(route.params.id, userId, 0).then(() => {
          fetchBlogDetails()
        })
      } else {
        isBlogLiked.value = false
        isBlogDisliked.value = true
        putLikesOnBlog(route.params.id, userId, -1)
      }
    }
    return {
      blogDetails,
      blogContent,
      publishedDate,
      blogId,
      putLikes,
      isBlogLiked,
      isBlogDisliked,
      putDislikes,
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
  padding: 1em;
  width: 50%;
  flex: 1;
}
.main-content {
  text-align: left;
}
.profile-picture {
  display: flex;
}
.date {
  margin-top: 0.5em;
}
.likes {
  margin-top: 1em;
}
.blog-content {
  margin-top: 1em;
}

.thumbs-up {
  margin-top: 1em;
  display: flex;
  flex-direction: row;
}

.pi {
  font-size: 1.5rem;
}

.pi-down {
  margin-left: 0.5em;
}
.images {
  display: flex;
  margin-top: 1em;
  flex-direction: column;
}

.card-content {
  display: flex;
  flex-direction: column;
  padding-left: 1em;
}

.active {
  color: green;
}
.inactive {
  color: red;
}
@media (max-width: 480px) {
  .card {
    width: 100%;
  }
}
</style>
