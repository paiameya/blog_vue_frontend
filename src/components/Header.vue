<template>
  <div class="container">
    <img
      class="netflixLogo"
      src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true"
      alt="Logo Image"
    />
    <ul class="nav-links">
      <li>Home</li>
      <li>TV Shows</li>
      <li>Movies</li>
      <li>News & Popular</li>
      <li>My List</li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  margin-left: 1em;
}
.netflixLogo {
  width: 6em;
  cursor: pointer;
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
</style>
