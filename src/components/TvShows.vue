<template>
  <h1>Tv Shows</h1>
  <div class="card">
    <Carousel
      :value="TvShows"
      :numVisible="10"
      :numScroll="3"
      :responsiveOptions="responsiveOptions"
    >
      <template #item="slotProps">
        <div class="product-item">
          <div class="product-item-content">
            <div class="p-mb-3 img-container">
              <img
                :src="slotProps.data.poster"
                :alt="slotProps.data.name"
                class="image"
              />
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
import { ref } from 'vue'
import Carousel from 'primevue/carousel'
import TvShows from '../movieServices/TvShows'

export default {
  components: {
    Carousel,
  },
  setup() {
    const responsiveOptions = ref([
      {
        breakpoint: '1024px',
        numVisible: 8,
        numScroll: 3,
      },
      {
        breakpoint: '600px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '480px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '300px',
        numVisible: 1,
        numScroll: 1,
      },
    ])
    return {
      TvShows,
      responsiveOptions,
    }
  },
}
</script>

<style scoped>
h1 {
  color: white;
  font-size: 16px;
  margin-left: 3.5em;
}
.img-container {
  width: 10em;
  height: 8em;
}
.image {
  width: 100%;
  height: 100%;
  padding: 0.3em;
}

.product-item-content {
  transition: transform 500ms;
}
.product-item-content:hover {
  transform: scale(1.5);
  cursor: pointer;
}
</style>
