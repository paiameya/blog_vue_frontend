<template>
  <div id="header">
    <div class="logo-container">
      <img class="logo-content" :src="logo" alt="Logo" @click="goHomePage" />
    </div>
    <div class="side-wrapper">
      <Search v-if="!isSearch" />
      <a href="#" @click="toggleDialog" v-if="!isloggedIn">Sign In</a>
      <template class="fixedLogOut">
        <img
          :src="avatar"
          alt="avatar"
          width="40"
          height="40"
          v-if="isloggedIn"
          @click="toggle"
        />
        <div v-if="active" id="logout-menu" @click="handleClickSignOut">
          Logout
        </div>
      </template>
    </div>

    <template v-if="displayLogOut">
      <Signout :displayResponsive="displayLogOut" @showDialog="displayLogOut" />
    </template>
    <template v-else>
      <Signup :displayResponsive="showDialog" @showDialog="showDialog" />
    </template>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import Search from '@/components/Search.vue'
import Logo from '@/assets/logo.png'
import userpic from '@/assets/userpic.jpeg'
import Signup from '@/components/Signup.vue'
import Signout from '@/components/Signout.vue'
import { logout } from '@/services/logout/logout'
import { useRoute, useRouter } from 'vue-router'

export default {
  inject: ['Vue3GoogleOauth'],
  name: 'Header',
  components: {
    Search,
    Signup,
    Signout,
  },
  data() {
    return {
      showDialog: false,
      logo: Logo,
      avatar: userpic,
      store: useStore(),
      route: useRoute(),
      router: useRouter(),
      isSearch: false,
      active: false,
      width: 0,
      displayLogOut: false,
    }
  },
  methods: {
    async handleClickSignOut() {
      this.active = false
      await this.$gAuth.signOut()
      logout(this.$store.getters.sessionToken)
        .then(() => {
          this.$store.dispatch('updateSignedInStatus', false)
          this.$store.dispatch('updateSessionToken', '')
          this.$store.dispatch('updateUserId', '')
        })
        .catch(() => {
          alert('Logout failed')
        })
    },

    toggleDialog() {
      this.showDialog = !this.showDialog
      this.displayLogOut = false
    },
    toggle() {
      this.width = window.innerWidth
      if (this.width < 1025) {
        this.active = false
        this.displayLogOut = !this.displayLogOut
        this.showDialog = !this.showDialog
        console.log('mobile', this.displayLogOut)
      } else {
        this.active = !this.active
      }
    },

    goHomePage() {
      this.$router.push({ name: 'LandingPage' })
    },
  },
  computed: {
    isloggedIn() {
      return this.$store.getters.isSignedIn
    },
  },
  mounted() {
    this.isSearch =
      this.$route.path.includes('/blogpage') ||
      this.$route.path.includes('/search')
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
  padding: 0 20px;
}
.logo-container {
  width: 5rem;
  height: 5rem;
}
.logo-content {
  width: 100%;
  height: 100%;
}
.logo-content:hover {
  cursor: pointer;
}
#header input.right {
  width: 15% !important;
}
#logout-menu {
  position: absolute;
  right: 1%;
  margin-top: 40px;
  padding: 15px;
  border-radius: 5%;
  border-top: 2px solid #f5f5f5;
  border-left: 2px solid #f5f5f5;
  box-shadow: 1px 1px 1px gray;
}
#logout-menu:hover {
  cursor: pointer;
}
.fixedLogOut {
  display: flex;
  flex-direction: column;
}
@media (max-width: 1685px) {
  #logout-menu {
    right: 1.5%;
  }
}
@media (max-width: 1300px) {
  #logout-menu {
    right: 2%;
  }
}
</style>
