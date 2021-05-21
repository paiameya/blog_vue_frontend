<template>
  <div class="input-wrapper">
    <InputText
      placeholder="Search"
      v-model.trim="searchInput"
      @input="debounce"
    />
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import { ref, computed, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {
    InputText,
  },

  setup(_, context) {
    const store = useStore()
    const searchInput = ref(searchKeyword)

    const searchKeyword = computed(() => {
      return store.state.searchKeyword
    })
    onMounted(() => {
      searchInput.value = searchKeyword.value
    })
    watch(searchKeyword, newV => {
      console.log(27)
      searchInput.value = newV
    })
    const createDebounce = () => {
      let timeout = null
      return function () {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          store.dispatch('updateSearchKeyword', searchInput.value)
          context.emit('searchInput')
        }, 200)
      }
    }
    return {
      searchInput,
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
