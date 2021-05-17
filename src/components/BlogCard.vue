<template>
  <div class="blog-card-container">
    <template v-if="!isRequiredForDropdown">
      <div class="blog-card-content">
        <h4 class="blog-content-author-name">{{ authorName }}</h4>
        <div>
          <h2 class="blog-content-title">
            {{ title }}
          </h2>
        </div>
        <div class="blog-content-summary-container">
          <h3 class="blog-content-summary">{{ summary }}</h3>
        </div>
        <div>
          <p class="blog-date">{{ date }}</p>
        </div>
      </div>
      <div class="blog-card-img-container">
        <img class="blog-card-img" :src="imageURL" alt="Blog" />
      </div>
    </template>
    <template v-else>
      <div class="blog-card-dropdown">
        <h2 class="dropdown-title">
          {{ title }}
        </h2>
        <h4 class="dropdown-author-name">{{ authorName }}</h4>
      </div>
    </template>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    imageURL: String,
    title: String,
    summary: String,
    authorName: String,
    publishedDate: String,
    isRequiredForDropdown: { type: Boolean, default: false },
  },
  setup(props) {
    const date = ref(
      new Date(Date.now(props.publishedDate))
        .toDateString()
        .split(' ')
        .splice(1, 2)
        .toString()
    )

    return {
      date,
    }
  },
}
</script>

<style scoped>
.blog-card-container {
  width: 25rem;
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
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.blog-content-summary {
  margin: 0;
  font-weight: 300;
  color: var(--surface-600);
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 16rem;
}
.blog-date {
  margin-top: 0.3rem;
  color: var(--surface-700);
  font-size: 0.8rem;
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
  border-radius: 5%;
}

.blog-card-dropdown {
  text-align: left;
}

.dropdown-title {
  text-transform: capitalize;
  font-size: 1.1rem;
  line-height: 1.5rem;
  margin: 0 0 0.5rem 0;
  overflow: hidden;
  width: 25rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dropdown-author-name {
  font-size: 0.9rem;
  margin: 0;
}
@media (max-width: 768px) {
  .blog-content-title {
    font-size: 1.1rem;
    width: 13rem;
  }
  .blog-content-summary {
    width: 13rem;
  }
  .blog-card-container {
    width: 22rem;
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
    width: 14rem;
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

@media (width: 540px) {
  .blog-card-container {
    width: 32rem;
  }
  .blog-content-title,
  .blog-content-summary {
    width: 20rem;
  }
}
</style>
