import { createRouter, createWebHistory } from 'vue-router'
import Orders from '../views/Orders.vue'
import Products from '../views/Products.vue'

const routes = [
  { path: '/', component: Products },
  { path: '/orders', component: Orders }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
