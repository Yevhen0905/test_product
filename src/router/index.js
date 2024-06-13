import { createRouter, createWebHistory } from 'vue-router'
import Orders from '../views/Orders.vue'
import Products from '../views/Products.vue'

const routes = [
  { path: '/', component: Products },
  { path: '/orders', component: Orders }
]

const router = createRouter({
  history: createWebHistory('/test_product/'),
  routes
})

export default router
