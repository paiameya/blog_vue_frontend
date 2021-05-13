<template>
  <svg
    :fill="fill"
    :height="size"
    :width="size"
    id="Layer_1"
    style="enable-background: new 0 0 512 512"
    version="1.1"
    viewBox="0 0 512 512"
    xml:space="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64  H288z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: { type: String, default: '1.1rem' },
    fill: { type: String, default: '#F5F5F5' },
  },
}
</script>
