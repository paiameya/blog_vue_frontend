<template>
  <div class="blog-card-container">
    <div class="blog-card-content">
      <h4 class="blog-content-author-name">{{ authorName }}</h4>
      <div>
        <h2 class="blog-content-title">{{ title }}</h2>
      </div>
      <div class="blog-content-summary-container">
        <h3 class="blog-content-summary">{{ summary }}</h3>
      </div>
      <div>
        <p class="blog-date">{{ publishedDate }}</p>
      </div>
    </div>
    <div class="blog-card-img-container">
      <img class="blog-card-img" :src="imageURL" alt="Blog" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageURL: String,
    title: String,
    summary: String,
    category: String,
    authorName: String,
    publishedDate: String,
  },
}
</script>

<style scoped>
.blog-card-container {
  width: 26rem;
  display: flex;
  padding: 0.2rem 0.5rem;
}
.blog-card-content {
  margin-right: 1rem;
  text-align: left;
}
.blog-content-author-name {
  font-size: 0.8rem;
}
.blog-content-title {
  margin: 0;
  font-size: 1.2rem;
  width: 16rem;
  word-wrap: break-word;
  text-transform: capitalize;
}

.blog-content-summary {
  margin: 0;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 300;
  color: var(--surface-600);
  font-size: 0.9rem;
  word-wrap: break-word;
  width: 16rem;
}
.blog-date {
  margin-top: 0.3rem;
  color: var(--surface-500);
  font-size: 0.7rem;
  font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 2rem;
}

.blog-card-img-container {
  width: 12rem;
  height: 7rem;
  margin-top: 0.5rem;
}
.blog-card-img {
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .blog-card-container {
    width: 40rem;
  }
  .blog-card-content {
    margin-right: 2.5rem;
  }
}

@media (max-width: 420px) {
  .blog-content-summary-container {
    display: none;
  }
  .blog-card-img-container {
    height: 6rem;
    width: 8rem;
  }
  .blog-card-container {
    width: 25rem;
  }
  .blog-content-title {
    font-size: 1.05rem;
  }
  .blog-date {
    font-size: 0.6rem;
    line-height: 1.5rem;
  }
}

@media (max-width: 380px) {
  .blog-card-img-container {
    margin-right: 0.5rem;
  }
}
</style>
