import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage'
const routes = [
  {
    path: '/LandingPage/',
    name: 'LandingPage',
    component: LandingPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
