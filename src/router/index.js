import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage'
import BlogPage from '@/views/BlogPage'
const routes = [
  {
    path: '/LandingPage/',
    name: 'LandingPage',
    component: LandingPage,
  },

  {
    path: '/blogpage/:id',
    name: 'BlogPage',
    component: BlogPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
