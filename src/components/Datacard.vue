<template>
  <div class="card-body">
    <h2 class="font-weight-bold">
      <span class="datacard-title">{{ title }}</span>
    </h2>
    <span class="datacard-content">{{ content }}</span>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    content: String,
  },
}
</script>
<style></style>
