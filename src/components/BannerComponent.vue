<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<template>
  <div class="bg-red-600 rounded-xl">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <span class="flex p-2 rounded-lg bg-red-800">
            <svg
              class="w-6 h-6"
              fill="transparent"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="#fff"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              ></path>
            </svg>
          </span>
          <p class="ml-10 font-medium text-white truncate">
            <strong>
              Please ensure the correct platform & version is selected below.
            </strong>
            <br />
            Versions labeled as "Spigot" run on PaperMC as well.
            <br />
            Versions below 1.16.5 are classified as legacy and receive no
            support.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
