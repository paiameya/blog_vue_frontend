import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage'
import BlogSearchPage from '@/views/BlogSearchPage.vue'
import BlogPage from '@/views/BlogPage'
import AuthorPage from '@/views/AuthorPage'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/search',
    name: 'BlogSearchPage',
    component: BlogSearchPage,
  },
  {
    path: '/blogpage/:id',
    name: 'BlogPage',
    component: BlogPage,
  },
  {
    path: '/authorpage/:id',
    name: 'AuthorPage',
    component: AuthorPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
