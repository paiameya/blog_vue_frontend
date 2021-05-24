<template>
  <Header />
  <Movies />
</template>

<script>
import Movies from '@/components/Movies.vue'
import Header from '@/components/Header.vue'
export default {
  components: {
    Movies,
    Header,
  },
}
</script>
