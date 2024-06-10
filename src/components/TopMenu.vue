<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand text-uppercase fw-bold navbar_brand_text" href="#"> Inventory </a>
      <div class="top_menu">
        <div class="date_time">
          <div class="day">{{ dayOfWeek }}</div>
          <div class="date">{{ fullDate }} {{ time }}</div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentDate = ref(new Date())

const dayOfWeek = computed(() => {
  return currentDate.value.toLocaleString('en-GB', { weekday: 'long' })
})

const dayOfMonth = computed(() => {
  return currentDate.value.toLocaleString('en-GB', { day: '2-digit' })
})

const month = computed(() => {
  return currentDate.value.toLocaleString('en-GB', { month: 'long' })
})

const year = computed(() => {
  return currentDate.value.getFullYear()
})

const fullDate = computed(() => {
  return `${dayOfMonth.value} ${month.value} ${year.value}`
})

const time = computed(() => {
  return currentDate.value.toLocaleString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
})
</script>

<style lang="scss">
.navbar {
  position: relative;
  z-index: 1;
  box-shadow: 3px -2px 10px rgb(111 111 111 / 89%);
}

.navbar-brand,
.date_time {
  color: rgb(95, 172, 118) !important;
}
</style>
