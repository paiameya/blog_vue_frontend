<template>
  <div class="grw-section section-lg pb-5 bg-soft">
    <div class="grw-container">
      <template v-if="isPage">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="mb-4">Faster growth starts with Impact</h2>
            <p class="lead mb-5">
              Join over <span class="font-weight-bolder">300,000+</span> users
            </p>
            <template v-for="(imgUrl, i) in imgUrls" :key="i">
              <img :src="imgUrl" class="icon text-gray mr-3" alt="brand-logo" />
            </template>
          </div>
          <div class="col-12 text-center">
            <a href="#" class="btn btn-secondary animate-up-2">
              <span class="mr-2"></span> Start 30-days trial
            </a>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="row justify-content-center">
          <div class="col-12">
            <h3 class="mb-5 text-center">
              We accept PayPal and all major credit cards.
            </h3>
          </div>
          <div class="col-12 text-black text-center mb-5">
            <div class="icon mr-2">
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const isPage = ref(false)
    const imgUrls = ref([
      'https://img.icons8.com/windows/452/mailchimp.png',
      'https://iconape.com/wp-content/png_logo_vector/cpanel.png',
      'https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/86_Dhl_logo_logos-512.png',
      'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png',
      'https://cdn4.iconfinder.com/data/icons/vector-brand-logos/40/AWS-512.png',
      'https://miro.medium.com/max/512/1*W0CzkfZmO1ye33fEllG3Ig.png',
    ])
    return {
      imgUrls,
      isPage,
    }
  },
}
</script>

<style scoped>
.grw-section {
  position: relative;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: block;
}
.pb-5 {
  padding-bottom: 3rem !important;
}
.bg-soft {
  background-color: #f4f6fc !important;
}

.grw-container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.text-center {
  text-align: center !important;
}
.mb-5 {
  margin-bottom: 3rem !important;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}
.mb-4 {
  margin-bottom: 1.5rem !important;
}

h2,
.h2 {
  font-size: 2rem;
}
h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.lead {
  font-size: 1.25rem;
  font-weight: 400;
}
.font-weight-bolder {
  font-weight: 700 !important;
}

.text-gray,
.text-gray:hover {
  color: #4a5073 !important;
}
.icon {
  text-align: center;
  display: inline-flex;
  width: 50px;
  align-items: center;
  justify-content: center;
}
.text-gray {
  color: #4a5073 !important;
}

.mr-3,
.mx-3 {
  margin-right: 1rem !important;
}
a,
.text-action {
  color: #0648b3;
  transition: all 0.2s ease;
}
a {
  color: #0648b3;
  text-decoration: none;
  background-color: transparent;
}
.btn-secondary {
  color: #ffffff;
  background-color: #ee5050;
  border-color: #ee5050;
  box-shadow: 0 0.125rem 0.25rem rgb(13 20 49 / 7%);
}
.btn {
  display: inline-block;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 0.0625rem solid transparent;
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.5rem;
}
.mr-2 {
  margin-right: 0.5rem !important;
}

.justify-content-center {
  justify-content: center !important;
}
h3 .h2,
.h3 {
  font-family: 'Nunito Sans', sans-serif;
}
.text-black {
  color: #24262b !important;
}
@media (min-width: 576px) {
  .mx-sm-3 {
    margin-right: 1rem !important;
  }
}

@media (max-width: 1200px) {
  h2,
  .h2 {
    font-size: calc(1.325rem + 0.9vw);
  }
  h3 {
    font-size: calc(1.3rem + 0.6vw);
  }
}

@media (max-width: 991.98px) {
  .lead {
    font-size: 1rem;
  }
}
@media (min-width: 1024px) {
  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
}
</style>
