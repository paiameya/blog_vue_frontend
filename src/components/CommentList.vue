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
export default {
  components: {
    CommentCard,
  },
  setup() {
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
      fetch(
        `https://api.instantwebtools.net/v1/passenger?page=${page.value}&size=5`
      )
        .then(res => res.json())
        .then(comments => {
          const newComments = comments.data.splice(0, 7880)
          commentList.value.push(...newComments)
          page.value++
          totalComments.value = 112
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
