<template>
  <div id="nav">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Forum&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

body {
  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
