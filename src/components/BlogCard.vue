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

<style>
:root {
  font-size: 62.5%;
}
.blog-card-container {
  width: 36rem;
  display: flex;
}
.blog-card-content {
  margin-right: 1.6rem;
  text-align: left;
}
.blog-content-author-name {
  font-size: 1.1rem;
}
.blog-content-title {
  margin: 0;
  font-size: 1.6rem;
  width: 22rem;
  word-wrap: break-word;
  text-transform: capitalize;
}

.blog-content-summary {
  margin: 0;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 300;
  color: slategrey;
  font-size: 1.2rem;
  word-wrap: break-word;
  width: 22rem;
}

.blog-date {
  margin: 0.8rem 0 0 0;
  color: rgba(117, 117, 117, 1);
  font-size: 0.9rem;
  font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.blog-card-img-container {
  width: 12rem;
  height: 9rem;
  margin-top: 0.8rem;
}
.blog-card-img {
  width: 100%;
  height: 100%;
}

@media (max-width: 727px) {
  .blog-content-summary-container {
    display: none;
  }
}

@media (max-width: 360px) {
  :root {
    font-size: 60%;
  }
}

@media (max-width: 320px) {
  :root {
    font-size: 53%;
  }
}
@media (min-width: 410px) {
  :root {
    font-size: 69%;
  }
}

@media (min-width: 540px) {
  :root {
    font-size: 90%;
  }
}

@media (width: 768px) {
  :root {
    font-size: 62.5%;
  }
  .blog-card-container {
    width: 40rem;
  }
}
</style>
