<template>
  <div class="input-wrapper">
    <InputText
      class="p-inputtext-lg"
      placeholder="Search"
      v-model.trim="searchInput"
      :value="searchInput"
      @keydown.enter="handleKeyDown"
    />
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import { ref } from 'vue'

export default {
  components: {
    InputText,
  },

  setup(_, context) {
    const searchInput = ref('')

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
