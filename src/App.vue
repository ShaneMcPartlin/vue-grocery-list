<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue"
import GroceryList from "./components/GroceryList.vue"
</script>

<template>
  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

  <div>
    <HelloWorld msg="Grocery list" />
    <GroceryList />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
