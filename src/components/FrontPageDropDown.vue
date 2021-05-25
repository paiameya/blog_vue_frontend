<template>
  <Dropdown
    v-model="selectedPage"
    :options="pages"
    optionLabel="name"
    placeholder="Front Pages"
    class="dropdown"
  />
</template>

<script>
import Dropdown from 'primevue/dropdown'
import { ref } from 'vue'
export default {
  components: {
    Dropdown,
  },
  setup() {
    const selectedPage = ref()
    const pages = ref([
      { name: 'Landing', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Contact', path: '/contact' },
    ])
    return {
      pages,
      selectedPage,
    }
  },
}
</script>

<style>
.dropdown {
  background: none;
  border: none;
  outline: none !important;
  width: 8em;
}
.p-dropdown-label {
  padding: 0;
}
.dropdown:focus {
  outline: none !important;
}
</style>
