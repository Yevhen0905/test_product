<template>
  <div class="view">
    <h2 class="title order_title mb-4">Orders / {{ orders.length }}</h2>
    <div class="orders_wrapper">
      <div :class="['products', { hidden: selectedOrder }]" v-auto-animate>
        <OrderItem
          v-for="order in orders"
          :key="order.id"
          :order="order"
          :is-hidden-field="!selectedOrder"
          @delete-order="deleteOrder"
          @detail-order="showDetails"
        />
      </div>
      <div v-if="selectedOrder" class="order_details_wrapper" v-auto-animate>
        <OrderDetails
          v-if="selectedOrder"
          :selectedOrder="selectedOrder"
          @close-details="closeDetails"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useOrdersStore } from '@/stores/orders'
import { useProductsStore } from '@/stores/products'

import OrderItem from '@/components/OrderItem.vue'
import OrderDetails from '@/components/OrderDetails.vue'

const ordersStore = useOrdersStore()
const productsStore = useProductsStore()

const orders = computed(() => ordersStore.orders)

const selectedOrder = ref(null)

const deleteOrder = (id) => {
  ordersStore.deleteOrderById(id)
  if (selectedOrder.value && selectedOrder.value.id === id) {
    selectedOrder.value = null
  }
}

const showDetails = (order) => {
  selectedOrder.value = order
}

const closeDetails = () => {
  selectedOrder.value = null
}

onMounted(() => {
  productsStore.fetchProducts()
  ordersStore.fetchOrder()
})
</script>

<style lang="scss">
.orders_wrapper {
  display: flex;
  gap: 15px;
}

.products.hidden {
  width: 45%;
}

.order_details_wrapper {
  width: 53%;
  transition: all 0.3s ease;
}

.order_title {
  margin: 0 auto;
}
</style>
