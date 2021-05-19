<template>
  <div id="header">
    <div class="logo-container">
      <img class="logo-content" :src="Logo" alt="Logo" />
    </div>
    <div class="side-wrapper">
      <Search v-if="!isSearch" />
      <a href="#" @click="toggleDialog" v-if="!isloggedIn">Sign In</a>
      <a
        href="#"
        v-bind:isloggedIn="false"
        @click="handleClickSignOut"
        v-if="isloggedIn"
        >Sign Out</a
      >
      <img
        :src="userpic"
        alt="userimage"
        width="40"
        height="40"
        v-if="isloggedIn"
      />
    </div>
    <Signup :displayResponsive="showDialog" @showDialog="showDialog" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import Search from '@/components/Search.vue'
import Logo from '@/assets/logo.png'
import userpic from '@/assets/userpic.jpeg'
import Signup from '@/components/Signup.vue'
import { logout } from '@/services/logout/logout'
import { useRoute } from 'vue-router'

export default {
  inject: ['Vue3GoogleOauth'],
  name: 'Header',
  components: {
    Search,
    Signup,
  },
  setup() {
    const showDialog = ref(false)
    const store = useStore()
    const route = useRoute()
    const isSearch = ref(false)

    onMounted(() => {
      isSearch.value =
        route.path.includes('/blogpage') || route.path.includes('/search')
    })

    const isloggedIn = computed(() => {
      return store.getters.isSignedIn
    })
    const toggleDialog = () => {
      showDialog.value = !showDialog.value
    }
    const handleClickSignOut = async () => {
      logout(store.getters.sessionToken)
        .then(() => {
          this.$store.dispatch('updateSessionToken', '')
            this.$store.dispatch('updateUserId', '')
            this.$store.dispatch('updateSignedInStatus', false)

        })
        .catch(() => {
          alert('Logout failed')
        })
    }
    return {
      Logo,
      isloggedIn,
      isSearch,
      userpic,
      showDialog,
      toggleDialog,
      handleClickSignOut,
    }
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: var(--surface-555);
  padding-left: 20px;
}
.side-wrapper {
  align-items: center;
  display: flex;
}

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
