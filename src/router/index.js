import { createRouter, createWebHistory } from 'vue-router'

import Contact from '../views/Contact'
import Home from '../views/Home'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = createRouter({ 
  history: createWebHistory(),
  routes
})

export default router