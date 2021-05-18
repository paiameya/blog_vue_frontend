<template>
  <div id="header">
    <img class="logo-content" :src="Logo" alt="Logo" />
    <Search v-if="!isSearch" />

    <Signup />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Search from '@/components/Search.vue'
import Logo from '@/assets/logo.png'
import Signup from '@/components/Signup.vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Header',
  components: {
    Search,
    Signup,
  },
  setup() {
    const route = useRoute()
    const isSearch = ref(false)

    onMounted(() => {
      isSearch.value = route.path.includes('/search')
    })

    return {
      Logo,
      isSearch,
    }
  },
}
</script>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  background-color: var(--surface-00) !important;
  padding: 20px;
}
#header img.logo-content {
  width: 10%;
  height: 1.75em;
  opacity: 1 !important;
}
#header input.right {
  width: 15% !important;
}
</style>
