<template>
  <div id="header">
    <div class="logo-container">
      <img class="logo-content" :src="Logo" alt="Logo" />
    </div>
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
      isSearch.value =
        route.path.includes('/blogpage') || route.path.includes('/search')
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
  align-items: center;
  background-color: var(--surface-00) !important;
  padding: 20px;
}
.logo-container {
  width: 5rem;
  height: 5rem;
}
.logo-content {
  width: 100%;
  height: 100%;
}
#header input.right {
  width: 15% !important;
}
</style>
