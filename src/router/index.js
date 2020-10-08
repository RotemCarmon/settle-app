import { createRouter, createWebHistory } from 'vue-router'
import mainApp from '../views/main-app.vue'

const routes = [
  {
    path: '/',
    name: 'main-app',
    component: mainApp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
