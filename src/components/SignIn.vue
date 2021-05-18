<template>
  <div class="sign-up-google">
    <img
      class="img-icons"
      :src="google"
      width="23"
      height="23"
      alt="Google Icon"
    />
    <div>
    <button
      @click="handleClickSignIn"
      :disabled="Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized"
    >
      Sign in with Google
    </button>
    
    </div>
    <div>
      <button
      @click="handleClickSignOut"
      :disabled="Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized"
    >
      Sign out with Google
    </button>
  
    </div>
  </div>
</template>

<script>
import {ssoLogin } from '@/services/login/ssoLogin'
import google from '@/assets/icons/google-icon.svg'
import { useStore } from 'vuex'
export default {
  inject: ['Vue3GoogleOauth'],
  data() {
    return {
      user: '',
      google,
      store: useStore(),
    }
  },

  methods: {
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn()
        if (!googleUser) {
          return null
        }
        this.user = googleUser.getBasicProfile().getEmail()
        let userAuthDetails = googleUser.getAuthResponse()
        console.log(userAuthDetails.id_token)
        ssoLogin(`tokenId=${userAuthDetails.id_token}`).then(res=>{
          console.log("res",res)
        })
        this.store.dispatch('updateSignedInStatus', true)
      } catch (error) {
        return null
      }
    },
    async handleClickSignOut() {
      try {
        const googleUser = await this.$gAuth.signOut()
        console.log(googleUser)
        this.user=''
         this.store.dispatch('updateSignedInStatus', false)
      } catch (error) {
        return null
      }
    }
  },
}
</script>

<style>
.sign-up-google {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  height: 2.5rem;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}

button:disabled {
  background: #fff;
  color: #ddd;
  cursor: not-allowed;
}
</style>
