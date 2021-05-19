<template>
  <div id="container">
    <div>
      <h4>Leave a comment</h4>
      <textarea
        id="text-area"
        rows="5"
        cols="80"
        placeholder="Please enter the comment"
        @Click="checkAuth"
      ></textarea>
      <div class="buttons">
        <button @click="onClickSubmit">Submit</button>
        <button @click="onClickClear">Clear</button>
      </div>
      <!-- <template v-if="isAuthenticated"> -->
      <Signup
        :displayResponsive="isAuthenticated"
        @showDialog="isAuthenticated"
      />
      <!-- </template> -->
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { postComment } from '@/services/comments/postComment.js'
import Signup from '@/components/Signup.vue'
import store from '../store/index'
export default {
  name: 'CommentBox',
  components: {
    Signup,
  },
  props: {
    blogId: String,
  },
  setup(props) {
    const isAuthenticated = ref(false)
    // const showDialog=ref(false)
    const onClickClear = () => {
      document.getElementById('text-area').value = ''
    }
    const onClickSubmit = () => {
      const comment = document.getElementById('text-area').value
      const userId = localStorage.getItem('userId')
      const posting = {
        userId: userId,
        blogId: props.blogId,
        comment: comment,
      }
      postComment(posting).then(response => console.log(response.data))
    }
    const checkAuth = () => {
      if (!store.getters.isSignedIn) {
        console.log(isAuthenticated.value)
        isAuthenticated.value = !isAuthenticated.value
      } else {
        console.log('welcome user you may proceed')
      }
    }
    return {
      onClickClear,
      onClickSubmit,
      checkAuth,
      isAuthenticated,
    }
  },
}
</script>

<style scoped>
#container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
#container h4 {
  margin-bottom: 5px;
  margin-left: 5px;
}
#text-area {
  border: 2px solid black;
}

.buttons button {
  padding: 5px;
  margin: 5px;
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
  float: right;
}
</style>
