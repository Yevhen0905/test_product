<template>
  <div class="product_wrapper mb-2">
    <h2 class="title w-100">{{ product.title }}</h2>
    <p class="type w-100"><span class="bold">Type:</span> {{ product.type }}</p>
    <p class="specification w-100">{{ product.specification }}</p>
    <div class="guarantee w-100">
      <h6 class="bold">Guarantee:</h6>
      <span>from {{ product.guarantee.start }}</span>
      <span>to {{ product.guarantee.end }}</span>
    </div>
    <div class="price w-100">
      <h6 class="price_title bold">Price:</h6>
      <span class="price_usd">{{ product.price[0].value }} {{ product.price[0].symbol }}</span>
      <span>{{ product.price[1].value }} {{ product.price[1].symbol }}</span>
    </div>
    <p class="order w-100"><span class="bold">Order:</span> {{ product.order }}</p>
    <p class="date w-100">
      <span class="bold">date:</span> <span>{{ product.date }}</span>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object
})
</script>

<style scoped lang="scss">
.type {
  max-width: 120px;
}

.specification {
  max-width: 115px;
}

.guarantee {
  display: flex;
  flex-direction: column;
  max-width: 200px;

  span {
    display: inline-block;
    font-style: italic;
  }
}

.price {
  max-width: 100px;
  display: flex;
  flex-direction: column;

  .price_usd {
    font-size: 14px;
    color: #ccc;
  }

  &_title {
    margin-bottom: 0;
  }
}

.order {
  max-width: 100px;
}

.date {
  display: flex;
  flex-direction: column;
  max-width: 155px;
}


</style>
