<template>
  <div class="product_wrapper">
    <h2 v-if="isHiddenField" class="title">{{ order.title }}</h2>
    <div class="order_products">
      <div class="icon" @click="ShowDetailOrder">
        <img src="../assets/img/card-list.svg" alt="open" />
      </div>
      <p>{{ order.products.length }} products</p>
    </div>
    <div class="order">
      <p class="bold">Created on:</p>
      <span class="order_item size">{{ formattedDateWithoutDay }}</span>
      <span class="order_item">{{ formattedDate }}</span>
    </div>
    <div v-if="isHiddenField" class="order">
      <p class="bold">Total Amount:</p>
      <span class="order_item size">{{ totalUSD }} USD</span>
      <span class="order_item">{{ totalUAH }} UAH</span>
    </div>
    <div class="icon" v-if="isHiddenField" @click="deleteOrder">
      <img src="../assets/img/trash-fill.svg" alt="delete" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import { useOrdersStore } from '@/stores/orders'

const props = defineProps({
  order: Object,
  isHiddenField: Boolean
})

const ordersStore = useOrdersStore()
const emit = defineEmits(['delete-order', 'detail-order'])

const totalUSD = computed(() => {
  return props.order.products.reduce((total, product) => {
    const priceUSD = product.price.find((p) => p.symbol === 'USD')
    return total + (priceUSD ? priceUSD.value : 0)
  }, 0)
})

const totalUAH = computed(() => {
  return props.order.products.reduce((total, product) => {
    const priceUAH = product.price.find((p) => p.symbol === 'UAH')
    return total + (priceUAH ? priceUAH.value : 0)
  }, 0)
})

const parts = props.order.date.split('.')
const day = parts[0]
const month = parts[1]
const year = parts[2]

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

const monthName = monthNames[parseInt(month, 10) - 1]

const formattedDate = `${day} / ${monthName} / ${year}`
const formattedDateWithoutDay = `${month} / ${year}`

const deleteOrder = () => {
  ordersStore.setOrderToDelete(props.order)
}

const ShowDetailOrder = () => {
  emit('detail-order', props.order)
}
</script>

<style lang="scss">
.order {
  display: flex;
  flex-direction: column;
}

.order_item {
  font-style: italic;

  &.size {
    font-size: 14px;
    color: #ccc;
  }
}

.order_products {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon {
  width: 31px;
  height: 31px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
