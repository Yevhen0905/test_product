<template>
  <div class="view">
    <div class="filter">
      <h2 class="title">Products / {{ products.length }}</h2>
      <select
        class="filter_select form-select"
        aria-label="Default select example"
        v-model="selectedType"
      >
        <option value="">All</option>
        <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
      </select>
    </div>
    <div class="products">
      <ProductItem v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProductsStore } from '@/stores/products'

import ProductItem from '../components/ProductItem.vue'

const selectedType = ref('')

const productsStore = useProductsStore()

const products = computed(() => productsStore.products)

const types = computed(() => [...new Set(products.value.map((product) => product.type))])

const filteredProducts = computed(() => {
  return selectedType.value
    ? products.value.filter((product) => product.type === selectedType.value)
    : products.value
})

onMounted(productsStore.fetchProducts)
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 15px;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }

  &_select {
    max-width: 300px;
    width: 100%;

    @media only screen and (max-width: 700px) {
      max-width: 230px;
    }
  }
}

.form-select:focus {
  border-color: rgb(97 163 87 / 89%) !important;
  box-shadow: 0 0 0 0.25rem rgb(97 163 87 / 25%);
}
</style>
