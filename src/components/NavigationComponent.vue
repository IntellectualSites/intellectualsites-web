<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      entries: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Sponsors",
          path: "/sponsors",
        },
        {
          name: "Contact",
          path: "/contact",
        },
        {
          name: "Team",
          path: "/team",
        },
        {
          name: "SpigotMC",
          path: "https://www.spigotmc.org/members/79996/#resources",
        },
        {
          name: "Jenkins (CI)",
          path: "https://ci.athion.net/",
        },
        {
          name: "Discord",
          path: "https://discord.gg/intellectualsites",
        },
      ],
    };
  },
  data() {
    return {
      toggled: false,
    };
  },
});
</script>

<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click.prevent="toggled = !toggled"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              v-if="!toggled"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="../assets/logo-white.svg"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="../assets/logo-white.svg"
              alt="Workflow"
            />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <template
                v-for="entry in entries"
                v-bind:key="'NAV-ED-' + entry.name"
              >
                <a
                  v-if="entry.path.startsWith('https://')"
                  :href="entry.path"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {{ entry.name }}
                </a>
                <RouterLink
                  v-else
                  :to="entry.path"
                  active-class="bg-gray-900 text-white"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {{ entry.name }}
                </RouterLink>
              </template>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <a href="https://github.com/IntellectualSites">
            <img
              class="block h-6"
              src="../assets/icons/github-white.svg"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
    </div>
    <div
      class="sm:hidden"
      id="mobile-menu"
      :class="toggled ? 'block' : 'hidden'"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <template v-for="entry in entries" v-bind:key="'NAV-ED-' + entry.name">
          <a
            v-if="entry.path.startsWith('https://')"
            :href="entry.path"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
          >
            {{ entry.name }}
          </a>
          <RouterLink
            v-else
            :to="entry.path"
            active-class="bg-gray-900 text-white"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
          >
            {{ entry.name }}
          </RouterLink>
        </template>
      </div>
    </div>
  </nav>
</template>
