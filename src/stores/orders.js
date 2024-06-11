import { defineStore } from 'pinia'
import { useProductsStore } from './products'

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    orders: [],
    orderToDelete: null
  }),
  actions: {
    async fetchOrder() {
      const productsStore = useProductsStore()
      try {
        const res = await fetch('./orders.json')
        const data = await res.json()
        this.orders = data.map((order) => ({
          ...order,
          get products() {
            return productsStore.products.filter((product) => product.order === order.id)
          }
        }))
      } catch (e) {
        console.error(e)
      }
    },
    deleteOrderById(order) {
      this.orders = this.orders.filter((o) => o.id !== order.id)

      this.orderToDelete = null
    },
    setOrderToDelete(order) {
      this.orderToDelete = order
    }
  }
})
