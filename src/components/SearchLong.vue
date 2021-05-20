<template>
  <div class="input-wrapper">
    <InputText
      placeholder="Search"
      v-model.trim="searchInput"
      @keydown.enter="handleKeyDown"
      @input="debounce"
    />
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
  components: {
    InputText,
  },

  setup(_, context) {
    const store = useStore()
    const route = useRoute()
    const searchInput = ref(route.query.q)
    const createDebounce = () => {
      let timeout = null
      return function () {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          context.emit('searchInput', searchInput.value)
        }, 200)
      }
    }
    const handleKeyDown = () => {
      store.dispatch('updateSearchKeyword', searchInput.value)
    }

    return {
      searchInput,
      handleKeyDown,
      debounce: createDebounce(),
    }
  },
}
</script>

<style scoped>
.input-wrapper {
  display: flex;
  justify-content: center;
}
.p-inputtext {
  border: 0px;
  box-shadow: none !important;
  border-bottom: 1px solid var(--surface-400);
  width: 90%;
  font-size: 40px !important;
  letter-spacing: 0;
  font-weight: 300;
  font-style: normal;
  height: 70px;
  padding: 0;
}
.p-inputtext:focus {
  border: 0px;
  box-shadow: none;
  border-bottom: 1px solid var(--primary-color);
}
</style>
