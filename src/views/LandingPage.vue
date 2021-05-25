<template>
  <Header />
  <Movies />
  <TvShows />
  <NetFlixOriginal />
</template>

<script>
import Movies from '@/components/Movies.vue'
import Header from '@/components/Header.vue'
import TvShows from '@/components/TvShows'
import NetFlixOriginal from "../components/NetFlixOriginals"

export default {
  components: {
    Movies,
    Header,
    TvShows,
    NetFlixOriginal,
  },
}
</script>
