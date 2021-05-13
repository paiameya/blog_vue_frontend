<template>
  <div id="nav">
    
    <router-view />
  </div>
  <LandingPage />
</template>
<script>
import LandingPage from './views/LandingPage'
export default {
  components: {
    LandingPage
  }
}
</script>

<style>
body,html {
  margin: 0px;
  padding: 0px;
  display:block;
  width:100%;
  min-height:100vh;
  overflow-x: hidden;
}
#app {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
