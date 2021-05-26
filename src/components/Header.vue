<template>
  <div class="container">
    <div class="img-container">
      <img
        class="logo-img"
        src="https://blog.rayabharitech.com/front/assets/img/brand/dark.svg"
        alt="Logo"
      />
    </div>
    <ul class="list-container">
      <li class="lists">Overview</li>
      <li class="lists"><FrontPageDropDown /></li>
      <li class="lists">App page</li>
      <li class="lists">Support</li>
    </ul>
    <div class="btn">
      <button class="components-btn">
        <i class="pi pi-microsoft icon"></i> Components
      </button>
      <button class="upgrade-btn">
        <i class="pi pi-send icon"></i>Upgrade to Pro
      </button>
    </div>
    <div @click="handleMenu">
      <i class="pi pi-align-justify menu"></i>
      <Sidebar
        class="side-bar"
        v-model:visible="visibleLeft"
        :baseZIndex="1000"
      >
        <div class="img-container">
          <img
            class="logo-img"
            src="https://blog.rayabharitech.com/front/assets/img/brand/dark.svg"
            alt="Logo"
          />
        </div>
        <div class="drop-down">
          <FrontPageDropDown />
        </div>
      </Sidebar>
    </div>
  </div>
</template>

<script>
import FrontPageDropDown from '@/components/FrontPageDropDown'
import Sidebar from 'primevue/sidebar'
import { ref } from '@vue/reactivity'
export default {
  components: {
    FrontPageDropDown,
    Sidebar,
  },
  setup() {
    const visibleLeft = ref(false)
    const handleMenu = () => {
      visibleLeft.value = true
    }
    return {
      handleMenu,
      visibleLeft,
    }
  },
}
</script>

<style>
.container {
  display: flex;
  background: transparent;
  align-items: center;
  justify-content: center;
}
.img-container {
  height: 2.1rem;
}
.logo-img {
  height: 100%;
}

.list-container {
  list-style: none;
  display: flex;
  color: #66799e;
  margin-right: 6.25rem;
}

.lists {
  margin: 1rem;
}

.icon {
  margin: 0 0.5rem;
}
.components-btn,
.upgrade-btn {
  padding: 0.7rem 1.25rem;
  border: 0.0625rem solid #66799e;
  background: transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #0648b3;
  vertical-align: middle;
  margin: 0 1rem;
  outline: none;
}

.upgrade-btn {
  color: #ffffff;
  background-color: #ee5050;
  border-color: #ee5050;
  box-shadow: 0 0.125rem 0.25rem rgb(13 20 49 / 7%);
}

.components-btn:hover,
.upgrade-btn:hover {
  margin-top: -0.5rem;
}

.menu {
  zoom: 1.5;
  display: none;
  cursor: pointer;
}
.side-bar {
  margin: 1rem;
  width: 90%;
  transition: all 0.3s;
}
.drop-down {
  margin: 3rem 1rem;
}

@media (max-width: 1405px) {
  .container {
    padding: 0 5rem;
  }
}
@media (max-width: 1317px) {
  .container {
    padding: 0 3rem;
  }
  .components-btn,
  .upgrade-btn {
    padding: 0.6rem 1rem;
  }
}
@media (max-width: 1261px) {
  .container {
    padding: 0 1rem;
  }
  .components-btn,
  .upgrade-btn {
    padding: 0.4rem 0.8rem;
  }
}
@media (max-width: 1214px) {
  .container {
    padding: 0 0.5rem;
  }
  .components-btn,
  .upgrade-btn {
    margin: 0 0.5rem;
  }
  .list-container {
    margin-right: 2rem;
  }
  .lists {
    margin: 0.5rem;
  }
}
@media (max-width: 1014px) {
  .list-container {
    display: none;
  }
  .btn {
    display: none;
  }
  .img-container {
    margin: 1rem;
    flex: 0.8;
  }
  .menu {
    display: flex;
  }
  .img-container {
    flex: 0.95;
  }
}

@media (max-width: 420px) {
  .img-container {
    flex: 0.9;
  }
}

@media (min-width: 768px) {
  .side-bar {
    width: 96%;
  }
  .container {
    padding: 0.2rem 0rem 0 1rem;
  }
}
</style>
