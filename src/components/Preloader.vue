<template>
  <div v-if="isLoading" class="preloader">
    <div class="loader-element">
      <span class="loader-animated-dot"></span>
      <img :src="loader" height="40" alt="Impact logo" />
    </div>
  </div>
</template>

<script>
import loader from '@/assets/dark-loader.svg'
import { ref } from 'vue'
export default {
  setup() {
    let isLoading = ref(true)

    // let preloader = ref(document.querySelector('.preloader'))
    // if (preloader.length) {
    // preloader.delay(1500).slideUp()
    // }
    return {
      // preloader,
      loader,
      isLoading,
    }
  },
  created() {
    setTimeout(() => {
      this.isLoading = false
      // this.preloader.style.transition = 'all 2s ease-in-out'
      // this.preloader.style.height = '0px'
    }, 2000)
  },
}
</script>

<style>
.preloader {
  transition: all 2s ease-in-out;
  display: flex;
  align-items: center;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  transition: opacity 0.2s linear;
  width: 100%;
  z-index: 9999;
  align-items: center;
  justify-content: center;
  flex-direction: column !important;
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
  animation: bounce 0.6s cubic-bezier(0.6, -0.28, 0.74, 0.05) infinite;
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
}

.animated.bounce {
  -webkit-animation-name: bounce;
  -moz-animation-name: bounce;
  -o-animation-name: bounce;
  animation-name: bounce;
}
.loader-element img {
  height: 40px;
}
</style>
