<template>
  <div class="input-wrapper">
    <InputText
      placeholder="Search"
      v-model.trim="searchInput"
      @keydown.enter="handleKeyDown"
    />
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    InputText,
  },

  setup(_, context) {
    const route = useRoute()
    const searchInput = ref('')

    onBeforeMount(() => {
      if (route.query.category) {
        searchInput.value = `Category: ${route.query.q}`
      }
    })

    const handleKeyDown = () => {
      context.emit('searchInput', searchInput.value)
    }

    return {
      searchInput,
      handleKeyDown,
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
