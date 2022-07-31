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
          icon: "../assets/icons/plugins/gunpowder.png", // TODO: Compiler can't detect image path, as it's not directly referenced...
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
  <main class="container mx-auto px-6">
    <!-- Information -->
    <div class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2
            class="text-base text-is-red font-semibold tracking-wide uppercase"
          >
            IntellectualSites
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Information
          </p>
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

    <!-- New Project -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="">
        <p
          class="mt-2 text-xl leading-8 font-bold tracking-tight text-gray-900 sm:text-2xl text-center"
        >
          Our Projects
        </p>

        <div
          class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-6 max-w-7xl text-l text-gray-700 lg:mx-auto mb-5 items-start"
        >
          <div
            class="flex flex-1 gap-5"
            v-for="project in projects"
            v-bind:key="project.name"
          >
            <img :src="project.icon" class="w-24 h-24" />
            <span>
              <b>{{ project.name }}</b>
              <p class="">{{ $t(`projects.${project.name}.slogan`) }}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
