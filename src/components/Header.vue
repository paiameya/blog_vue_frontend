<template>
  <div id="header">
    <img class="logo-content" :src="Logo" alt="Logo" />
    <Search/>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import Logo from '@/assets/logo.png';

export default {
  name: 'Header',
  components: {
    Search,
  },
  setup() {
    return {
      Logo,
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
