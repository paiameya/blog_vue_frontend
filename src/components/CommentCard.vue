<template>
  <ol class="comment-list">
    <li class="comment">
      <article class="comment-body">
        <header class="comment-meta">
          <div class="comment-author-img">
            <img
              class="author-img"
              src="https://secure.gravatar.com/avatar/52f79e92fdda71a258de1818558dcea4?s=36&d=mm&r=g"
            />
            <b class="fn">{{ commenter.name }}</b>
            <span> Says:</span>
          </div>
          <div class="comment-metadata">
            <time class="data-time">{{ commenter.date }}</time>
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

<style scoped>
.comment-list {
  display: block;
  width: 50%;
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
  padding: 2px;
}
.fn {
  font-size: 16px;
  line-height: 1.4;
  padding-left: 10px;
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

<script>
export default {
  props: {
    commenter: {
      name: String,
      date: String,
      message: String,
    },
  },
  setup() {},
}
</script>
