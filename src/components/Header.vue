<template>
  <div id="header">
    <nav class="navbar">
      <div class="nav container">
        <div class="logo-container">
          <img
            class="logo-content"
            :src="logo"
            alt="Logo"
            @click="goHomePage"
          />
        </div>
        <div class="nav-big-container">
          <Dropdown
            v-model="selectedNavItem"
            :options="navItems"
            optionLabel="name"
            placeholder="Front Pages"
          />
        </div>
        <div class="subscribe-btns">
          <a href="/" class="btn btn-docs animate-up-2 comp"
            ><font-awesome-icon :icon="['fas', 'th-large']" /> Components</a
          >
          <a href="/" target="_blank" class="btn btn-secondary animate-up-2 upg"
            ><font-awesome-icon :icon="['fas', 'paper-plane']" /> Upgrade to
            Pro</a
          >
        </div>
        <button class="navbar-toggler" type="button" @click="openBasic">
          <span
            class="navbar-toggler-icon"
            :style="{ backgroundImage: `url(${hamburger})` }"
          ></span>
        </button>
        <Dialog
          v-model:visible="displayBasic"
          :style="{ width: '90%', height: '90vh' }"
        >
          <template #header>
            <img
              class="logo-content"
              :src="logo"
              alt="Logo"
              @click="goHomePage"
            />
          </template>
          <Dropdown
            v-model="selectedNavItem"
            :options="navItems"
            optionLabel="name"
            placeholder="Front Pages"
          />
        </Dialog>
        <!-- <Dialog header="Header" v-model:visible="display">
          <template #content>
            <div class="nav container">
              <div class="logo-container">
                <img
                  class="logo-content"
                  :src="logo"
                  alt="Logo"
                  @click="goHomePage"
                />
              </div>
              <font-awesome-icon :icon="['fas', 'user-secret']" />
            </div>
          </template>
        </Dialog> -->
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from '@/assets/logo.svg'
import Hamburger from '@/assets/hamburger.svg'
import { useRouter } from 'vue-router'
import Dialog from 'primevue/dialog'
import Dropdown from 'primevue/dropdown'

import { ref } from 'vue'

// import Card from 'primevue/card'

export default {
  name: 'Header',
  components: {
    Dialog,
    Dropdown,
  },
  setup() {
    const selectedNavItem = ref()
    const navItems = ref([
      { name: 'Landing' },
      { name: 'About' },
      { name: 'Pricing' },
      { name: 'Contact' },
    ])
    const displayBasic = ref(false)
    const openBasic = () => {
      displayBasic.value = true
    }
    const logo = Logo
    const hamburger = Hamburger
    const router = useRouter()
    const goHomePage = () => {
      router.push({ name: 'LandingPage' })
    }
    return {
      displayBasic,
      openBasic,
      logo,
      hamburger,
      goHomePage,
      selectedNavItem,
      navItems,
    }
  },
}
</script>

<style>
.navbar {
  background-color: #f4f6fc !important;
  /* position: absolute;
  top: 0; */
  width: 100%;
  z-index: 100;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
}
.nav {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.navbar .container {
  position: relative;
  padding-right: 0;
  padding-left: 0;
}
.logo-content {
  height: 35px;
}
.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: '';
  background: no-repeat center center;
  background-size: 100% 100%;
  color: #66799e;
  border-color: transparent;
}
.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 0.0625rem solid transparent;
  border-radius: 0.5rem;
  cursor: pointer;
}
.p-dialog-mask {
  top: -15px;
  background: #fff !important;
}
.p-dropdown {
  border: none !important;
}
.p-dropdown-item {
  transition: all 0.2s ease !important;
  font-size: 1.2rem !important;
  color: #0648b3 !important;
  background: transparent !important;
}
.p-dropdown .p-dropdown-label.p-placeholder {
  font-size: 1.2rem;
  color: #0648b3 !important;
  background: transparent !important;
}
.p-dropdown:not(.p-disabled).p-focus {
  box-shadow: none;
}
.p-dropdown-panel {
  border: none !important;
  background: #fff !important;
  box-shadow: none !important;
}
.nav-big-container,
.subscribe-btns {
  display: none;
}
.comp {
  margin-right: 20px;
}

@media (min-width: 992px) {
  .navbar-toggler {
    display: none;
  }
  .subscribe-btns {
    display: block;
  }
  .nav {
    justify-content: unset;
  }
  .nav-big-container {
    display: flex;
    flex-grow: 1;
    padding: 0 1em;
    margin-left: 1em;
  }
  .p-dropdown {
    background: none !important;
  }
  .p-dropdown-item {
    color: #6c757d !important;
  }
  .p-dropdown .p-dropdown-label.p-placeholder {
    color: #6c757d !important;
    background: transparent !important;
  }
}
/* @media (max-width: 1685px) {
  #logout-menu {
    right: 1.5%;
  }
}
@media (max-width: 1300px) {
  #logout-menu {
    right: 2%;
  }
} */
</style>
