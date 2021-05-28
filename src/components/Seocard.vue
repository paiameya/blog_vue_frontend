<template>
  <div class="card-outer">
    <div class="card">
      <div class="card-header">
        <img :src="image" class="card-img-top" alt="image" />
      </div>
      <div class="card-body">
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-text">
          {{ content }}
        </p>
        <ul class="list-group">
          <li class="list-group-item" v-for="item in items" :key="item">
            <span class="list-span">
              <font-awesome-icon
                :icon="['fas', 'check-circle']"
                class="success-icon"
            /></span>
            <div>{{ item }}</div>
          </li>
        </ul>
        <a href="/about" class="btn btn-primary">Learn More</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: String,
    title: String,
    content: String,
    items: Array,
  },
}
</script>
<style scoped>
.card-text {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: #4a5073;
}
.list-group {
  margin-bottom: 1.5rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding-left: 0;
}
.list-group-item:first-child {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.list-group-item {
  border: 0;
  padding-bottom: 0.25rem !important;
  padding-left: 0 !important;
  display: flex;
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: -0.0625rem;
  background-color: #ffffff;
  color: #4a5073;
}
.list-span {
  margin-right: 0.5rem;
}
.success-icon {
  color: #05a677 !important;
  font-weight: 900;
}
.card-img-top {
  width: 100%;
}
</style>
