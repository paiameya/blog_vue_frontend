<template>
  <form @submit.prevent="onSubmit">
    <form-input
      :type="inputType"
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
    let searchValue = ref('')
    let searchPlaceholder = ref('Search')
    let inputType = ref('search')
    function onSubmit() {
      //TODO: need to call search API.
      console.log('====>', searchValue.value)
    }
    return { searchValue, searchPlaceholder, inputType, onSubmit }
  },
}
</script>
