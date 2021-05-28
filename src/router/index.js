import { createRouter, createWebHistory } from 'vue-router'

const LandingPage = () => import('@/views/LandingPage')
const AboutPage = () => import('@/views/AboutPage')
const PricingPage = () => import('@/views/PricingPage')
const ContactPage = () => import('@/views/ContactPage')

//const BlogSearchPage = () => import('@/views/BlogSearchPage')
//const BlogPage = () => import('@/views/BlogPage')
//const AuthorPage = () => import('@/views/AuthorPage')

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/pricing',
    name: 'PricingPage',
    component: PricingPage,
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage,
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
