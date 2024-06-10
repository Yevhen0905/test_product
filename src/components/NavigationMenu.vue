<template>
  <div class="menu bg-white">
    <div class="menu_img_wrapper">
      <img src="../assets/img/images.jpg" class="menu_img" alt="..." />
    </div>
    <nav class="nav">
      <RouterLink class="nav_item" to="/products">Products</RouterLink>
      <RouterLink class="nav_item" to="/orders">Orders</RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  max-width: 200px;
  width: 100%;
  min-height: calc(100vh - 61px);
  box-shadow: 3px -2px 10px rgb(111 111 111 / 89%);
  padding: 100px 10px 0;

  @media only screen and (max-width: 620px) {
    max-width: 100%;
    min-height: 100%;
    gap: 20px;
    padding: 25px 10px;
  }
}

.nav {
  position: relative;
  text-align: center;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 15px;

  @media only screen and (max-width: 620px) {
    flex-direction: row;
  }
}

.nav_item {
  width: max-content;
  margin: 0 auto;
  font-size: 25px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 4px;
    background-color: rgb(95, 172, 118);
    transition: all 0.3s ease;
  }

  &.router-link-exact-active {
    color: rgb(95, 172, 118);
    font-size: 25px;
  }
}

.nav_item:hover::before {
  width: 100%;
  left: 0;
}

.nav_item.router-link-exact-active {
  color: rgb(95, 172, 118);
  font-size: 25px;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: rgb(95, 172, 118);
    transition: all 0.3s ease;
  }
}

.menu_img_wrapper {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid rgb(95, 172, 118);
  overflow: hidden;
  box-shadow: 0px 0px 9px 1px rgb(95, 172, 118);
}

.menu_img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
