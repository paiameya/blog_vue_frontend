<template>
  <div class="sign-up-google">
    <img
      class="img-icons"
      :src="google"
      width="23"
      height="23"
      alt="Google Icon"
    />
    <button
      @click="handleClickSignIn"
      :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized"
    >
      Sign up with Google
    </button>
  </div>
</template>

<script>
import google from '../assets/icons/google-icon.svg'
export default {
  inject: ['Vue3GoogleOauth'],
  data() {
    return {
      user: '',
      google,
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
      } catch (error) {
        return null
      }
    },
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
