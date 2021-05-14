import { createRouter, createWebHistory } from 'vue-router'
import BlogPage from '@/views/BlogPage'

const routes = [
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
