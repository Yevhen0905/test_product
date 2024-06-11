<template>
  <TopMenu />
  <div class="hero">
    <NavigationMenu />
    <div class="main">
      <transition v-auto-animate>
        <RouterView />
      </transition>
      <OrderDeleteModal />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

import TopMenu from './components/TopMenu.vue'
import NavigationMenu from './components/NavigationMenu.vue'
import OrderDeleteModal from './components/OrderDeleteModal.vue'
import { Transition } from 'vue'
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
