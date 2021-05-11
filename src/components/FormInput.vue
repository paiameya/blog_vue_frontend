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
    type: { type: String, default: 'text' },
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
  border-bottom: 1px solid var(--surface-400);
  width: 100%;
}
.p-inputtext:focus {
  border: 0px;
  box-shadow: none;
  border-bottom: 1px solid var(--primary-color);
}
</style>
