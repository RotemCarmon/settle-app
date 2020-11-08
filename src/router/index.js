import { createRouter, createWebHistory } from 'vue-router'
import recordPage from '../views/record-page.vue'
import groupPage from '../views/group-page.vue'
import loginPage from '../views/login-page.vue'
import homePage from '../views/home-page.vue'

const routes = [
  {
    path: '/',
    name: 'home-page',
    component: homePage
  },
  {
    path: '/login',
    name: 'login-page',
    component: loginPage
  },
  {
    path: '/group',
    name: 'group-page',
    component: groupPage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
