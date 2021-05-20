import { createRouter, createWebHistory } from 'vue-router'

const LandingPage = () => import('@/views/LandingPage')
const BlogSearchPage = () => import('@/views/BlogSearchPage')
const BlogPage = () => import('@/views/BlogPage')
const AuthorPage = () => import('@/views/AuthorPage')

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
  history: createWebHistory('/'),
  routes,
})

export default router
