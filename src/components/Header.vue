<template>
  <div id="header">
    <div class="logo-container">
      <router-link to="/"
        ><img class="logo-content" :src="Logo" alt="Logo" @click="goHomePage"
      /></router-link>
    </div>
    <div class="side-wrapper">
      <Search v-if="!isSearch" />
      <a href="#" @click="toggleDialog" v-if="!isloggedIn">Sign In</a>
      <template class="fixedLogOut">
        <img
          :src="userpic"
          alt="userimage"
          width="40"
          height="40"
          v-if="isloggedIn"
          @click="toggle"
        />
        <div v-if="active" id="LoggedOut">Logout</div>
      </template>
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
    const active = ref(false)
    const width = ref(0)
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
    const toggle = () => {
      width.value = window.innerWidth
      if (width.value < 1025) {
        showDialog.value = !showDialog.value
        active.value = false
      } else {
        active.value = !active.value
      }
    }
    const handleClickSignOut = async () => {
      logout(store.getters.sessionToken)
        .then(() => {
          store.dispatch('updateSignedInStatus', false)
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
      toggle,
      active,
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
#LoggedOut {
  position: absolute;
  right: 1%;
  margin-top: 40px;
  padding: 15px;
  border-radius: 5%;
  border-top: 2px solid #f5f5f5;
  border-left: 2px solid #f5f5f5;
  box-shadow: 1px 1px 1px gray;
}
.fixedLogOut {
  display: flex;
  flex-direction: column;
}
@media (max-width: 1685px) {
  #LoggedOut {
    right: 1.5%;
  }
}
@media (max-width: 1300px) {
  #LoggedOut {
    right: 2%;
  }
}
</style>
