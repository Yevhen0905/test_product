import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: []
  }),
  actions: {
    async fetchProducts() {
      try {
        const res = await fetch('./products.json')
        const data = await res.json()
        this.products = data
      } catch (e) {
        console.error(e)
      }
    }
  },

  getters: {
    getProductsByOrderId: (state) => (orderId) =>
      state.products.filter((product) => product.order === orderId)
  }
})
