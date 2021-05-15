<template>
  <div id="nav">
    
    <router-view />
  </div>
</template>

<style>
body,html {
  margin: 0px;
  padding: 0px;
  display:block;
  width:100%;
  min-height:100vh;
  overflow-x: hidden;
}
@import url('https://fonts.googleapis.com/css2?family=Forum&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

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

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
