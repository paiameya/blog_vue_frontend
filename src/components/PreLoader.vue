<template>
  <div
    v-if="loading"
    class="
      preloader
      bg-soft
      flex-column
      justify-content-center
      align-items-center
    "
  >
    <div class="loader-element">
      <span class="loader-animated-dot"></span>
      <img :src="darkLoader" alt="Impact logo" />
    </div>
  </div>
</template>

<script>
import darkLoader from '../assets/dark-loader.svg'
import { ref } from 'vue'
export default {
  setup() {
    const loading = ref(true)

    setTimeout(() => {
      loading.value = false
    }, 2000)

    return {
      darkLoader,
      loading,
    }
  },
}
</script>

<style scoped>
.preloader {
  display: flex;
  align-items: center;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  transition: opacity 0.2s linear;
  width: 100%;
  z-index: 9999;
}

.align-items-center {
  align-items: center !important;
}

.justify-content-center {
  justify-content: center !important;
}
.flex-column {
  flex-direction: column !important;
}

.preloader {
  display: flex;
  align-items: center;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  transition: opacity 0.2s linear;
  width: 100%;
  z-index: 9999;
}
.align-items-center {
  align-items: center !important;
}
.justify-content-center {
  justify-content: center !important;
}
.flex-column {
  flex-direction: column !important;
}
.bg-soft {
  background-color: #f4f6fc !important;
}

.preloader .loader-element {
  position: relative;
}

.preloader .loader-element .loader-animated-dot {
  display: block;
  width: 9px;
  height: 9px;
  background: #ee5050;
  border-radius: 50%;
  position: absolute;
  left: 1px;
  top: 1px;
  animation: bounce 0.6s cubic-bezier(0.1, -0.28, 0.74, 0.05) infinite;
}
img {
  height: 40px;
}
</style>
