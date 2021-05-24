import { createRouter, createWebHistory } from 'vue-router'

const LandingPage = () => import('@/views/LandingPage')

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  // {
  //   path: '/search',
  //   name: 'BlogSearchPage',
  //   component: BlogSearchPage,
  // },
  // {
  //   path: '/blogpage/:id',
  //   name: 'BlogPage',
  //   component: BlogPage,
  // },
  // {
  //   path: '/authorpage/:id',
  //   name: 'AuthorPage',
  //   component: AuthorPage,
  // },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
