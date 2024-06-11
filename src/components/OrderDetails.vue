<template>
  <div class="order_details">
    <h2 class="order_details_title">{{ selectedOrder.title }}</h2>
    <ul class="list_wrapper">
      <li class="list_item" v-for="product in selectedOrder.products" :key="product.id">
        <p>{{ product.title }}</p>
        <div>
          <span class="bold">Price:</span>
          <p class="order_details_size">
            {{ product.price[0].value }} {{ product.price[0].symbol }}
          </p>
          <p>{{ product.price[1].value }} {{ product.price[1].symbol }}</p>
        </div>
      </li>
    </ul>
    <button @click="closeDetails" type="button" class="btn-close" aria-label="Close"></button>
  </div>
</template>

<script setup>
const props = defineProps({
  selectedOrder: Object
})

const emit = defineEmits(['close-details'])

const closeDetails = () => {
  emit('close-details')
}
</script>

<style scoped>
.order_details {
  position: relative;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
}

.order_details_title {
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.order_details_size {
  color: #ccc;
  font-size: 14px;
}

.list_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid #ccc;

  &:last-child {
    border-bottom: 1px solid #ccc;
  }
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: rgb(97 163 87 / 89%) !important;
}
</style>
