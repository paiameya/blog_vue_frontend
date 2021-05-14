import { createRouter, createWebHistory } from 'vue-router'
import BlogPage from '@/views/BlogPage'
import AuthorPage from '@/views/AuthorPage'

const routes = [
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
