<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/components/header/TheHeader.vue";
</script>

<template>
  <head>
    <link href='https://fonts.googleapis.com/css?family=Gothic A1' rel='stylesheet'>
  </head>
  <body>
    <Header />
    <RouterView />
  </body>
</template>

<style scoped>

</style>
