<template>
  <ProgressBar v-if="isLoading" mode="indeterminate" style="height: 0.3em" />
</template>

<script>
import ProgressBar from 'primevue/progressbar'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  components: {
    ProgressBar,
  },
  setup() {
    const store = useStore()
    const isLoading = computed(() => {
      return store.getters.isLoading
    })
    return {
      isLoading,
    }
  },
}
</script>
