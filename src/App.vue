<template>
  <Background />
  <Header />
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Background from "./components/Background.vue";
</script>
<style scoped></style>
  