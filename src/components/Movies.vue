<template>
  <div class="card">
    <Carousel
      :value="MoviesList"
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
import MoviesList from '../movieServices/MovieList'

export default {
  components: {
    Carousel,
  },
  setup() {
    const responsiveOptions = ref([
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '600px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '480px',
        numVisible: 1,
        numScroll: 1,
      },
    ])
    return {
      MoviesList,
      responsiveOptions,
    }
  },
}
</script>

<style scoped>
h1 {
  color: white;
  font-size: 16px;
  margin-left: 1em;
}
.img-container {
  width: 8em;
  height: 11em;
}
.image {
  width: 100%;
  height: 100%;
  padding: 0.3em;
}
.image:hover {
  transform: scale(1.7);
  padding: 20px;
  cursor: pointer;
}
</style>
