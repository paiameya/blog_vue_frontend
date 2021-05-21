<template>
  <ol class="comment-list">
    <li class="comment">
      <article class="comment-body">
        <header class="comment-meta">
          <div class="comment-author-img">
            <Avatar :imageURL="UserPicture" />
            <div class="card-content">
              <div class="fn">
                <b>{{ commenter.user }}</b>
              </div>
              <div class="data-time">
                <time>{{ commenterDate }}</time>
              </div>
            </div>
          </div>
        </header>
        <main class="comment-content">
          <p>
            {{ commenter.message }}
          </p>
        </main>
      </article>
    </li>
  </ol>
</template>

<script>
import { computed } from 'vue'
import Avatar from './Avatar'
import UserPicture from '@/assets/userpic.jpeg'
import getDateFormat from '@/utils/getDateFormat'
export default {
  components: {
    Avatar,
  },
  props: {
    commenter: {
      name: String,
      date: String,
      message: String,
    },
  },
  setup(props) {
    const commenterDate = computed(() => {
      return getDateFormat(props.commenter.date)
    })
    return {
      UserPicture,
      commenterDate,
      getDateFormat,
    }
  },
}
</script>

<style scoped>
.comment-list {
  display: block;
  width: 100%;
  line-height: 1.5;
  margin: 1rem auto;
  padding-inline-start: 40px;
  list-style: none;
  padding-left: 0;
  font-size: 15px;
  font-weight: 400;
}
.comment-list li.comment {
  background: var(--surface-0);
  box-shadow: 0 1px 4px rgb(0 0 0 / 8%);
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 3px;
  padding: 20px;
  margin: 20px 0 20px 0;
  position: relative;
}
.comment-meta {
  font-size: 15px;
  font-weight: 400;
  color: var(--surface-700);
}
.comment-metadata {
  font-size: 15px;
  color: var(--surface-700);
  margin-bottom: 15px;
}
.comment-content {
  color: var(--surface-900);
  opacity: 0.84;
}

.comment-author-img {
  display: flex;
  align-items: center;
}
.card-content {
  display: flex;
  flex-direction: column;
  padding-left: 0.5em;
}
.fn {
  font-size: 16px;
  line-height: 1.4;
  font-weight: 600;
}
.author-img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
}
.data-time {
  color: var(--surface-900);
  opacity: 0.54;
}
article,
main,
header {
  display: block;
}
@media (max-width: 769px) {
  .comment-list {
    width: 75%;
  }
}
@media (max-width: 481px) {
  .comment-list {
    width: 95%;
  }
}
@media (max-width: 480px) {
  .comment-list {
    width: 100%;
    line-height: 1.4;
  }
}
</style>
