<template>
  <div class="sign-up-google"></div>
</template>

<script>
import { ssoLogin } from '@/services/login/ssoLogin'
import google from '@/assets/icons/google-icon.svg'
import { useStore } from 'vuex'
export default {
  inject: ['Vue3GoogleOauth'],
  props: {
    isloggedIn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      user: '',
      google,
      store: useStore(),
    }
  },
  //   watch: {
  //     isloggedIn: (oldVal, newVal) => {
  //       console.log('oldVal', oldVal, 'newVal', newVal)
  //     },
  //   },

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
        ssoLogin(`tokenId=${userAuthDetails.id_token}`).then(res => {
          console.log('res', res)
        })
        this.store.dispatch('updateSignedInStatus', true)
      } catch (error) {
        return null
      }
    },
  },
}
</script>

<style></style>
