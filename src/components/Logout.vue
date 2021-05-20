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
        @click="handleClickSignOut"
        :disabled="!Vue3GoogleOauth.isInit || !Vue3GoogleOauth.isAuthorized"
      >
        Sign out of Google
      </button>
    </div>
  </div>
</template>

<script>
import google from '@/assets/icons/google-icon.svg'
import { useStore } from 'vuex'
import { logout } from '@/services/logout/logout'
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
    async handleClickSignOut() {
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
      this.$emit('clicked', 'false')
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
