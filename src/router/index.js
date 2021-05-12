import { createRouter, createWebHistory } from 'vue-router'
import BlogSearchPage from '@/views/BlogSearchPage.vue'

const routes = [
  {
    path: '/search',
    name: 'BlogSearchPage',
    component: BlogSearchPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
