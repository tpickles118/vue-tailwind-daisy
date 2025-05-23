<script setup>
import NavBarTest from './components/NavBarTest.vue'
import RouterTest from './components/RouterTest.vue'
</script>

<template>
  <NavBarTest />
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-3xl font-bold mb-4">Home Page</h1>
    <p class="text-lg">This is the home page</p>
    <hr />

    <RouterTest />
  </div>
</template>

<style scoped></style>
