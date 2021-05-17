<template>
  <!-- <Button label="Show" icon="pi pi-external-link" @click="openResponsive"
    >Starded</Button
  > -->
  <!-- need to add @click="openResponsive" for the butoon on which we need to open Dialog card -->
  <Dialog
    class="dialogs"
    modal="true"
    dismissableMask="true"
    header=" "
    v-model:visible="displayDialog"
    :breakpoints="breakpoints"
    :style="{ width: '50vw' }"
  >
    <h2 class="signup-heading">Sign In.</h2>
    <div class="signup-links">
      <SignIn></SignIn>
    </div>
  </Dialog>
</template>

<script>
import { ref, watch } from 'vue'
import Dialog from 'primevue/dialog'
import SignIn from './SignIn'
import google from '../assets/icons/google-icon.svg'
import email from '../assets/icons/gmail-icon.svg'

export default {
  props: {
    displayResponsive: Boolean,
  },
  components: {
    Dialog,
    SignIn,
  },
  setup(props) {
    const breakpoints = ref({
      '360px': '100vw',
      '411px': '100vw',
      '420px': '100vw',
      '768px': '100vw',
      '1024px': '100vw',
    })
    const displayDialog = ref(false)
    const openResponsive = () => {
      displayDialog.value = true
    }
    watch(
      () => props.displayResponsive,
      () => {
        displayDialog.value = props.displayResponsive
      }
    )
    return {
      openResponsive,
      displayDialog,
      google,
      email,
      breakpoints,
    }
  },
}
</script>

<style scoped>
.signup-heading {
  text-align: center;
  margin-bottom: 3rem;
}
.signup-links {
  width: 35%;
  margin: 0 auto;
}
.sign-up-google,
.sign-up-gmail {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  height: 2.5rem;
}
.p-button {
  margin: 0.3rem 0.5rem;
  min-width: 10rem;
}
.text {
  margin-left: 0.5rem;
}

.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.p-dialog .p-button {
  min-width: 6rem;
}
.sign-in {
  margin: 2rem 0 0 0.5rem;
}
.signin-text {
  display: inline;
  font-size: 15px;
}
.signin-button {
  border: none;
  outline: none;
  background: initial;
  color: var(--green-700);
  font-weight: 600;
  cursor: pointer;
}
@media (width: 320px) {
  .signup-links {
    width: 90%;
  }
}
@media (max-width: 280px) {
  .signup-links {
    width: 100%;
  }
}
@media (width: 360px) {
  .sign-in {
    padding: 0.5rem 0 0 2.5rem;
  }
  .signup-links {
    width: 100%;
  }
}

@media (width: 411px) {
  .signup-links {
    width: 80%;
  }
  .sign-in {
    width: 80%;
    margin: 2rem auto 0 auto;
  }
}
@media (width: 414px) {
  .signup-links {
    width: 80%;
  }
  .sign-in {
    width: 80%;
    margin: 2rem auto 0 auto;
  }
}
@media (width: 375px) {
  .signup-links {
    width: 80%;
  }
  .sign-in {
    width: 90%;
    margin: 2rem auto 0 auto;
  }
}
@media (width: 420px) {
  .signup-links {
    width: 80%;
  }
  .sign-in {
    width: 90%;
    margin: 2rem auto 0 auto;
  }
}
@media (width: 540px) {
  .signup-links {
    width: 80%;
  }
  .sign-in {
    width: 90%;
    padding-left: 5rem;
  }
}
@media (width: 384px) {
  .signup-links {
    width: 80%;
  }
  .sign-in {
    margin-left: 1rem;
  }
}
@media (width: 1024px) {
  .sign-in {
    width: 90%;
    margin-left: 3rem;
  }
}
</style>
