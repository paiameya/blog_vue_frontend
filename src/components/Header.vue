<template>
  <div class="container">
    <img
      class="netflixLogo"
      src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true"
      alt="Logo Image"
    />
    <div class="menu">
      <ul class="nav-links">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>News & Popular</li>
        <li>My List</li>
      </ul>
    </div>
    <div>
      <button class="pi pi-bars menu-bar"></button>
    </div>
  </div>
</template>

<script>
import { PrimeIcons } from 'primevue/api'

export default {
  setup() {
    
    return {
      PrimeIcons,
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  box-shadow: 0.5em 0.5em 0.5em rgb(75, 70, 70);
}
.netflixLogo {
  width: 6em;
  cursor: pointer;
  margin-left: 0.5em;
  padding: 0.8em;
}
.nav-links {
  margin: 0;
  list-style: none;
  color: white;
  font-weight: 600;
  display: flex;
  cursor: pointer;
}

.nav-links li {
  margin: 1em;
}

.menu-bar {
  zoom: 1.5;
  color: white;
  display: none;
  background: none;
  outline: none;
  border: none;
}
.active {
  background: red;
  height: 100px;
  width: 100%;
}

@media (max-width: 674px) {
  .menu {
    display: none;
  }
  .menu-bar {
    display: flex;
    margin-right: 1em;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
