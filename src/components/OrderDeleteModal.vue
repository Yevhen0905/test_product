<template>
  <div class="order_modal modal" v-if="orderToDelete">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold">You are sure you want to delete this order?</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body">
          <h3>{{ orderToDelete.title }}</h3>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="closeModal"
          >
            Close
          </button>
          <button type="button" class="btn btn-light" @click="deleteOrder">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import { useOrdersStore } from '@/stores/orders'
const ordersStore = useOrdersStore()

const orderToDelete = computed(() => {
  return ordersStore.orderToDelete
})

const deleteOrder = () => {
  ordersStore.deleteOrderById(orderToDelete.value)
}

const closeModal = () => {
  ordersStore.setOrderToDelete(null)
}
</script>

<style lang="scss" scoped>
.order_modal.modal {
  position: absolute;
  display: block;
  top: 50%;
  transform: translateY(-50%);
  background: rgb(21 20 20 / 46%);
  transition: all 0.3s ease;
}

.modal-dialog {
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease;

  @media only screen and (max-width: 930px) {
    top: 10%;
    transform: none;
  }
}

.modal-footer {
  background-color: rgb(97 163 87 / 89%) !important;
}
</style>
