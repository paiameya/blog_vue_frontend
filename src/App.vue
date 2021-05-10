<template>
  <div id="nav">
    <AuthorCard
      imageURL="https://picsum.photos/200/300"
      authorName="Ken Adams"
    />
    <router-view />
  </div>
</template>

<script>
import AuthorCard from '../src/AuthorCard/AuthorCard'
export default {
  components: {
    AuthorCard,
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
