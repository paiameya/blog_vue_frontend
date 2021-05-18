<template>
  <div ref="scrollComponent">
    <div
      class="parent-container"
      v-for="comment in commentList"
      :key="comment._id"
    >
      <CommentCard :commenter="comment" />
    </div>
  </div>
</template>

<script>
import CommentCard from './CommentCard'
import { ref, onBeforeMount, onMounted, onUnmounted } from 'vue'
import { fetchCommentsList } from '@/services/comments/fetchCommentsList'
export default {
  components: {
    CommentCard,
  },
  props: {
    blogId: String,
  },
  setup(props) {
    const commentList = ref([])
    const page = ref(0)
    const scrollComponent = ref(null)
    const totalComments = ref(0)
    const loadComments = () => {
      if (
        totalComments.value &&
        commentList.value.length >= totalComments.value
      ) {
        return
      }
      fetchCommentsList(props.blogId, 0, 10).then(response => {
        commentList.value = response.data.result
      })
    }
    const handleScroll = () => {
      if (
        scrollComponent.value.getBoundingClientRect().bottom <
        window.innerHeight
      ) {
        loadComments()
      }
    }
    onBeforeMount(() => {
      loadComments()
    })
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    return {
      commentList,
      page,
      scrollComponent,
    }
  },
}
</script>

<style scoped>
.parent-container {
  display: flex;
  flex-direction: column;
}
</style>
