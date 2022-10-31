<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import LayoutDefault from './layouts/default.vue'
</script>

<template>
  <LayoutDefault>
    <NavBar />
    <RouterView />
  </LayoutDefault>
</template>

<style scoped>

</style>
