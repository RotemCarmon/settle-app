import { createRouter, createWebHistory } from 'vue-router'
import recordApp from '../views/record-app.vue'
import loginPage from '../views/login-page.vue'

const routes = [
  {
    path: '/',
    name: 'record-app',
    component: recordApp
  },
  {
    path: '/login',
    name: 'login-page',
    component: loginPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
