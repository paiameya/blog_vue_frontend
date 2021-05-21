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
import { ref, onBeforeMount, onMounted, onUnmounted, watch } from 'vue'
import { fetchCommentsList } from '@/services/comments/fetchCommentsList'
export default {
  components: {
    CommentCard,
  },
  props: {
    blogId: String,
    shouldUpdateCommentList: Boolean,
  },
  setup(props) {
    const updateComment = ref(false)
    const commentList = ref([])
    const page = ref(0)
    const scrollComponent = ref(null)

    const loadComments = () => {
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
      updateComment.value = props.shouldUpdateCommentList
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    watch(
      () => props.shouldUpdateCommentList,
      newValue => {
        updateComment.value = newValue
        commentList.value = []
        loadComments()
      }
    )
    return {
      commentList,
      page,
      scrollComponent,
      updateComment,
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
