<template>
  <Dropdown
    class="dropdown"
    v-model="selectedValue"
    :options="navItems"
    placeholder="Front Pages"
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
    const selectedValue = ref()
    const navItems = ref(['Landing', 'About', 'Pricing', 'Contact'])
    return {
      selectedValue,
      navItems,
    }
  },
}
</script>

<style>
.dropdown {
  border: none;
  outline: none;
}
.p-dropdown-label {
  padding: 0;
  outline: none;
}
</style>
