<script setup lang="ts">
import { RouterView } from "vue-router";
import NavigationComponent from "@/components/NavigationComponent.vue";
</script>

<template>
  <div class="flex flex-col h-screen">
    <NavigationComponent />
    <main class="grow">
      <RouterView />
    </main>
    <footer class="bg-gray-800 shadow flex items-center justify-center p-5">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© {{ new Date().getUTCFullYear() }} IntellectualSites | Made with
        <span class="text-is-red">&hearts;</span> and
        <a href="https://tailwindcss.com">Tailwind</a>
      </span>
    </footer>
  </div>
</template>
