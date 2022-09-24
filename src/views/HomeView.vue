<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup(): {
    projects: {
      icon: string;
      name: string;
      path: string;
    }[];
  } {
    return {
      projects: [
        {
          icon: "https://raw.githubusercontent.com/IntellectualSites/Assets/main/plugins/FastAsyncWorldEdit/FastAsyncWorldEdit.svg",
          name: "FastAsyncWorldEdit",
          path: "/fastasyncworldedit",
        },
        {
          icon: "@/assets/icons/plugins/gunpowder.png", // TODO: Compiler can't detect image path, as it's not directly referenced...
          name: "FastAsyncVoxelSniper",
          path: "/favs",
        },
        {
          icon: "https://raw.githubusercontent.com/IntellectualSites/Assets/main/plugins/PlotSquared/PlotSquared.svg",
          name: "PlotSquared",
          path: "/plotsquared",
        },
      ],
    };
  },
});
</script>

<template>
  <div
    class="bg-banner bg-top bg-no-repeat bg-cover bg-blend-darken h-60 w-full flex"
  >
    <h2
      class="text-white text-3xl m-auto font-semibold tracking-widest uppercase align-middle"
    >
      IntellectualSites
    </h2>
  </div>
  <div class="container mx-auto px-6">
    <!-- Information -->
    <div class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <p class="mt-4 max-w-3xl text-l text-gray-700 lg:mx-auto">
            IntellectualSites is the home of open source projects for and by the
            minecraft community.
            <br />
            Our projects are available for a plenty of platforms, for example
            Bukkit, Sponge, Forge, NukkitX and others.
            <br />
            Alongside plugins and mods, we are developing lots of other open
            source projects as well.
            <br />
            For example custom web frameworks, paste services and asset
            databases for our projects.
          </p>
        </div>
      </div>
    </div>

    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200"></div>
      </div>
    </div>

    <!-- New Project -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="">
        <p
          class="mt-2 text-xl leading-8 font-bold tracking-tight text-is-red sm:text-2xl text-center"
        >
          Our Projects
        </p>

        <div
          class="grid lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-12 mt-6 max-w-7xl text-l text-gray-700 lg:mx-auto mb-5 items-start"
        >
          <RouterLink class="text-center" to="/project/fastasyncworldedit">
            <img
              src="@/assets/icons/plugins/fawe.svg"
              class="w-24 h-24 m-auto"
            />
            <b>FastAsyncWorldEdit</b>
            <p>{{ $t(`projects.FastAsyncWorldEdit.slogan`) }}</p>
          </RouterLink>

          <RouterLink class="text-center" to="/project/plotsquared">
            <img src="@/assets/icons/plugins/ps.svg" class="w-24 h-24 m-auto" />
            <b>PlotSquared</b>
            <p>{{ $t(`projects.PlotSquared.slogan`) }}</p>
          </RouterLink>

          <RouterLink
            class="text-center sm:mb-5"
            to="/project/fastasyncvoxelsniper"
          >
            <img
              src="@/assets/icons/plugins/gunpowder.svg"
              class="w-24 h-24 m-auto"
            />
            <b>FastAsyncVoxelSniper</b>
            <p>{{ $t(`projects.FastAsyncVoxelSniper.slogan`) }}</p>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
