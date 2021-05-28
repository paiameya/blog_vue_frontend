<template>
  <div>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Forum&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap');
body {
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  font-family: 'Nunito Sans', sans-serif;
}
a {
  text-decoration: none;
  background-color: transparent;
}
.btn {
  font-family: 'Nunito Sans', sans-serif;
  text-decoration: none;
  display: inline-block;
  font-weight: 600;
  color: #4a5073;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 0.0625rem solid transparent;
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.5rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-secondary {
  color: #ffffff;
  background-color: #ee5050;
  border-color: #ee5050;
  box-shadow: 0 0.125rem 0.25rem rgb(13 20 49 / 7%);
}
.btn-docs {
  color: #0648b3;
  border-color: #0648b3;
}

.btn-primary {
  color: #ffffff;
  background-color: #0648b3;
  border-color: #0648b3;
  box-shadow: 0 0.125rem 0.25rem rgb(13 20 49 / 7%);
}

.animate-up-2 {
  transition: all 0.2s ease;
}
.animate-up-2:hover,
.animate-hover:hover .animate-up-2 {
  transform: translate(0, -2px);
}
img {
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
}
form {
  display: block;
  margin-top: 0em;
}
</style>
