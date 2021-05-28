<template>
  <header class="container">
    <div class="center-wrapper">
      <div class="logo">
        <img
          src="https://blog.rayabharitech.com/front/assets/img/brand/dark.svg"
        />
      </div>
      <div class="nav-items">
        <ul>
          <li class="nav-item"><a>Overview</a></li>
          <li class="nav-item">
            <a><NavigationDropdown /></a>
          </li>
          <li class="nav-item"><a>App pages</a></li>
          <li class="nav-item"><a>Support</a></li>
        </ul>
      </div>
      <div class="btn-wrapper">
        <button class="btn-components">
          <i class="pi pi-microsoft icon" />Components
        </button>
        <button class="btn-upgrade">
          <i class="pi pi-send icon" /> Upgrade to Pro
        </button>
      </div>
      <div @click="openBasic2"><i class="pi pi-align-justify menu"></i></div>
      <Dialog
        header="Header"
        v-model:visible="displayBasic2"
        :style="{ width: '90vw', height: '100vh', backgroundColor: '#fff' }"
      >
        <NavigationDropdown />
      </Dialog>
    </div>
  </header>
</template>

<script>
import NavigationDropdown from './NavigationDropdown'
import Dialog from 'primevue/dialog'
import { ref } from 'vue'
export default {
  components: {
    NavigationDropdown,
    Dialog,
  },
  setup() {
    const displayBasic2 = ref(false)
    const openBasic2 = () => {
      displayBasic2.value = true
    }
    return {
      openBasic2,
      displayBasic2,
    }
  },
}
</script>

<style scoped>
.container {
  height: 98px;
  display: flex;
  justify-content: center;
  width: 100%;
}
.center-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1190px;
}
.logo {
  height: 2.1rem;
}
.logo img {
  height: 100%;
}
ul {
  list-style: none;
  color: #66799e;
}
.nav-items ul {
  display: flex;
  margin: 0px;
  padding: 1rem 1.8rem;
}
a {
  cursor: pointer;
}
.nav-item {
  padding: 0.5rem 1.3rem;
}
.btn-wrapper {
  padding: 1rem 0rem 1rem 1.8rem;
}
.btn-components,
.btn-upgrade {
  display: inline-block;
  font-weight: 500;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
  padding: 0.6rem 0.6rem;
  border-radius: 0.5rem;
}
.btn-wrapper i {
  padding: 0 0.6rem;
}
.btn-components {
  margin: 0 1.4rem;
  color: #0648b3;
  background-color: transparent;
  border: 0.0625rem solid #0648b3;
}
.btn-upgrade {
  color: #ffffff;
  background-color: #ee5050;
  border-color: #ee5050;
  box-shadow: 0 0.125rem 0.25rem rgb(13 20 49 / 7%);
}

.menu {
  font-size: 30px;
  cursor: pointer;
  display: none;
}

@media (max-width: 1078px) {
  .btn-wrapper {
    padding: 0rem 0rem;
  }
  .btn-components,
  .btn-upgrade {
    padding: 0.5rem 0.6rem;
  }
}

@media (max-width: 1019px) {
  .nav-items {
    display: none;
  }
  .btn-wrapper {
    display: none;
  }
  .menu {
    display: flex;
    margin-right: 1rem;
  }
  .logo {
    display: flex;
    flex: 1;
    margin-left: 0.7rem;
  }
}
</style>
