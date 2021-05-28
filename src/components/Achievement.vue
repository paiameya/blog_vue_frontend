<template>
  <div class="card-outer">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">{{ title }}</h2>
        <p class="lead">
          {{ content }}
        </p>
      </div>
    </div>
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
<style>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #ffffff;
  background-clip: border-box;
  border: 0.0625rem solid rgba(243, 247, 250, 0.05);
  border-radius: 0.5rem;
  border-color: #eaedf2 !important;
}
.achievement .card-title {
  margin-bottom: 2rem;
}
.card-body {
  flex: 1 1 auto;
  padding: 1.5rem;
}
.card-outer {
  margin-bottom: 1.5rem !important;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.achievement .card {
  padding: 1.5rem !important;
}
.achievement-outer {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
</style>
