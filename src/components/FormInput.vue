<template>
  <InputText
    :type="type"
    :placeholder="placeholder"
    :value="value"
    :class="className"
    @input="$emit('update:value', $event.target.value)"
  />
</template>

<script>
import InputText from 'primevue/inputtext'

export default {
  name: 'form-input',
  components: {
    InputText,
  },
  props: {
    type: String,
    placeholder: { type: String, default: '' },
    value: { type: String, default: undefined },
    className: { type: String, default: '' },
  },
}
</script>

<style scoped>
.p-inputtext {
  border: 0px;
  box-shadow: none !important;
  border-bottom: 1px solid #ced4da;
  width: 100%;
}
.p-inputtext:focus {
  border: 0px;
  box-shadow: none;
  border-bottom: 1px solid #2196f3;
}
</style>
