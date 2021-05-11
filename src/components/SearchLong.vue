<template>
  <form @submit.prevent="onSubmit">
    <form-input
      :type="'search'"
      :placeholder="searchPlaceholder"
      :value="searchValue"
      v-model="searchValue"
      :className="`p-inputtext-lg`"
    />
  </form>
</template>

<script>
import { ref } from 'vue'
import FormInput from './FormInput.vue'

export default {
  components: {
    FormInput,
  },
  setup() {
    const searchValue = ref('')
    const searchPlaceholder = ref('Search')

    function onSubmit() {
      //TODO: need to call search API.
      console.log('====>', searchValue.value)
    }

    return { searchValue, searchPlaceholder, onSubmit }
  },
}
</script>
