<script setup lang="ts">
import { RouterView } from "vue-router";
import NavigationComponent from "@/components/NavigationComponent.vue";
</script>

<template>
  <div class="flex flex-col h-screen">
    <NavigationComponent />
    <RouterView class="grow mt-5" />
  </div>
</template>
