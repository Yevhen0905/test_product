import { createRouter, createWebHistory } from 'vue-router'
import Orders from '../views/Orders.vue'
import Products from '../views/Products.vue'

const routes = [
  { path: '/orders', component: Orders },
  { path: '/products', component: Products },
  { path: '/', redirect: '/products' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
