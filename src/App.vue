<template>
  <TopMenu />
  <div class="hero">
    <NavigationMenu />
    <div class="main">
      <RouterView />
      <OrderDeleteModal />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

import TopMenu from './components/TopMenu.vue'
import NavigationMenu from './components/NavigationMenu.vue'
import OrderDeleteModal from './components/OrderDeleteModal.vue'
</script>

<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 0;

  @media only screen and (max-width: 620px) {
    flex-direction: column;
  }
}

.main {
  position: relative;
  width: 100%;
  padding: 40px 10px;
}
</style>
