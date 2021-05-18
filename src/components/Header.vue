<template>
  <div id="header">
    <img class="logo-content" :src="Logo" alt="Logo" />
    <div class="side-wrapper">
      <Search />
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
import { ref } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import Search from '@/components/Search.vue'
import Logo from '@/assets/logo.png'
import userpic from '@/assets/userpic.jpeg'
import Signup from '@/components/Signup.vue'
//import {logout } from '@/services/logout/logout'

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
    const isloggedIn = computed(() => {
      return store.getters.isSignedIn
    })
    const toggleDialog = () => {
      showDialog.value = !showDialog.value
    }
    const handleClickSignOut = async () => {
      console.log("token",store.getters.sessionToken)
     // logout(token).then(res=>{ console.log("res",res)}).catch((err)=>{console.log("err in api call",err)})
     
     // store.dispatch('updateSignedInStatus', false)
    }
    return {
      Logo,
      isloggedIn,
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
  background-color: var(--surface-00) !important;
  opacity: 0.5;
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
