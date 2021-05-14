<template>
  <div id="header">
    <img class="logo-content" :src="logoURLResource" alt="Logo" />
    <Search/>
  </div>
</template>

<script>
import Search from './Search.vue'
export default {
  name: 'Header',
  components:{
Search,
  },
  props: {
    logoURL: String,
  },
  setup(props) {
    return {
      logoURLResource:props.logoURL,
    }
  },
}
</script>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  background-color: var(--surface-00) !important;
  opacity: 0.5;
  padding: 20px;
}
#header img.logo-content {
  width: 10%;
  height: 1.75em;
  opacity: 1 !important;
}
#header input.right {
  width: 15% !important;
}
</style>
