<template id="container">
  <!-- <Button label="Show" icon="pi pi-external-link" @click="openResponsive"
    >Starded</Button
  > -->
  <!-- need to add @click="openResponsive" for the butoon on which we need to open Dialog card -->
  <Dialog
    :modal="modalVar"
    :dismissableMask="dismissableMaskVar"
    header=" "
    v-model:visible="displayDialog"
    :breakpoints="breakpoints"
    :style="styling"
    @click="closeModal"
  >
    <h2 class="signup-heading">Sign Out.</h2>
    <div class="signup-links">
      <Logout @clicked="onClickChild" />
    </div>
  </Dialog>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import Dialog from 'primevue/dialog'

import google from '../assets/icons/google-icon.svg'
import email from '../assets/icons/gmail-icon.svg'
import Logout from '@/components/Logout.vue'

export default {
  props: {
    displayResponsive: Boolean,
  },
  components: {
    Dialog,

    Logout,
  },
  setup(props,context) {
    console.log('inside of a signout', props.displayResponsive)
    const breakpoints = ref({
      '360px': '100%',
      '411px': '100%',
      '420px': '100%',
      '768px': '100%',
      '1024px': '100%',
    })
    const displayDialog = ref(false)
    const modalVar = ref(true)
    const dismissableMaskVar = ref(true)
    const styling = ref({
      width: '50vw',
      height: '110vh',
      background: 'white',
      maxHeight: '100% !important',
    })
    onMounted(() => {
      displayDialog.value = props.displayResponsive
      if (window.innerWidth > 1025) {
        styling.value = {
          width: '50vw',
          height: '92vh',
          background: 'white',
          overflow: 'hidden',
          maxHeight: '100% !important',
        }
      }
    })
    const closeModal=()=>{
      context.emit('clicked',false)
    }
    const openResponsive = () => {
      displayDialog.value = true
    }
    const onClickChild = () => {
      setTimeout(() => {
        displayDialog.value = false
      }, 1000)
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
      styling,
      onClickChild,
      modalVar,
      dismissableMaskVar,
      closeModal
    }
  },
}
</script>

<style scoped>
/* .styling{
      width: '100vw';
      height: '100vh';
      background: 'white';
      max-height: '100% !important'; 
}
@media(min-width:1024px){
  .styling{
width: '50vw';
      height: '92vh';
      background: 'white';
      overflow:'hidden';
      max-height: '100% !important' ;
}
} */
.p-dialog {
  overflow: hidden;
  background-color: red;
}
.signup-heading {
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 0 auto;
}
.signup-links {
  width: 35%;
  margin: 0 auto;
  height: 100vh;
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
.container {
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
}
.p-dialog-mask {
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
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
#container {
  height: 100% !important;
  background-color: white;
}
@media (width: 320px) {
  .signup-links {
    width: 90%;
  }
}
@media (min-height: 1365px) {
  .signup-links {
    height: 74vh;
  }
}
@media (max-height: 1024px) {
  .signup-links {
    height: 69vh;
  }
}
@media (max-height: 823px) {
  .signup-links {
    height: 63vh;
  }
}
@media (max-height: 812px) {
  .signup-links {
    height: 63vh;
  }
}
@media (max-height: 736px) {
  .signup-links {
    height: 61vh;
  }
}
@media (max-height: 731px) {
  .signup-links {
    height: 63vh;
  }
}

@media (max-height: 720px) {
  .signup-links {
    height: 60vh;
  }
}
@media (max-height: 667px) {
  .signup-links {
    height: 58vh;
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
