<template>
  <div class="services-outer">
    <div class="service-content">
      <h2 class="service-title">{{ title }}</h2>
      <slot> </slot>

      <a href="/about" class="btn btn-primary mt-3 animate-up-2">
        Learn More
        <span class="icon icon-xs ml-2">
          <font-awesome-icon :icon="['fas', 'external-link-alt']" />
        </span>
      </a>
    </div>
    <div class="services-img">
      <img :src="image" alt="serv1" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    content: String,
    image: String,
  },

  setup() {},
}
</script>

<style>
.service-content a {
  margin-top: 10px;
}
.services-img {
  margin-top: 3rem;
}
</style>
