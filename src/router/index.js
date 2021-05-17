import { createRouter, createWebHistory } from 'vue-router'
import BlogSearchPage from '@/views/BlogSearchPage.vue'
import BlogPage from '@/views/BlogPage'
import SignupCompletion from '@/components/SignupCompletion.vue'

const routes = [
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
    path: '/signupcompletion',
    component: SignupCompletion,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
