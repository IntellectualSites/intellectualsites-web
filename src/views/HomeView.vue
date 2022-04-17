<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup(): {
    team: {
      name: string;
      url?: string;
    }[];
    projects: {
      name: string;
      path: string;
      tags: string[];
    }[];
    tags: { [key: string]: { color: string; text: string } };
  } {
    return {
      team: [
        {
          name: "Citymonstret",
          url: "https://github.com/Citymonstret",
        },
        {
          name: "dordsor21",
          url: "https://github.com/dordsor21",
        },
        {
          name: "IronApollo",
          url: "https://github.com/IronApollo",
        },
        {
          name: "Empire92",
          url: "https://github.com/boy0001",
        },
        {
          name: "MattBDev",
          url: "https://github.com/MattBDev",
        },
        {
          name: "NotMyFault",
          url: "https://github.com/NotMyFault",
        },
        {
          name: "RedstoneFuture",
          url: "https://github.com/RedstoneFuture",
        },
      ],
      projects: [
        {
          name: "FastAsyncWorldEdit",
          path: "/fawe",
          tags: ["spigot"],
        },
        {
          name: "FastAsyncVoxelSniper",
          path: "/favs",
          tags: ["spigot"],
        },
        {
          name: "PlotSquared",
          path: "/plotsquared",
          tags: ["spigot"],
        },
        {
          name: "HoloPlots",
          path: "/holoplots",
          tags: ["psAddon"],
        },
        {
          name: "Plot2Dynmap",
          path: "/plot2dynmap",
          tags: ["psAddon"],
        },
        {
          name: "Schematic Web Interface",
          path: "/schematic-web-interface",
          tags: ["web"],
        },
        {
          name: "Paste Viewer",
          path: "/paste-viewer",
          tags: ["web"],
        },
      ],
      tags: {
        spigot: {
          color: "bg-orange-600",
          text: "Spigot",
        },
        web: {
          color: "bg-green-600",
          text: "Web",
        },
        psAddon: {
          color: "bg-blue-600",
          text: "P2 Addon",
        },
        standalone: {
          color: "bg-rose-600",
          text: "Standalone",
        },
        framework: {
          color: "bg-red-600",
          text: "Framework",
        },
      },
    };
  },
});
</script>

<template>
  <main class="container mx-auto px-6">
    <!-- Information -->
    <div class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2
            class="text-base text-is-red font-semibold tracking-wide uppercase"
          >
            IntellectualSites
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
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
            <br />
            <br />
            <b>Team Members: </b>
            <template v-for="(member, index) in team" v-bind:key="member.name">
              <a :href="member.url">{{ member.name }}</a>
              <span v-if="index !== team.length - 1">, </span>
            </template>
          </p>
        </div>
      </div>
    </div>

    <!-- Projects -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Projects
        </p>

        <div
          class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-6 max-w-7xl text-l text-gray-700 lg:mx-auto mb-5"
        >
          <div
            v-for="project in projects"
            v-bind:key="project.name"
            class="bg-white shadow-lg rounded-lg p-3 hover:cursor-pointer hover:scale-105 transition-all"
          >
            {{ project.name }}
            <br />
            <span
              v-for="tag in project.tags"
              v-bind:key="project.name + tag"
              class="px-2 py-1 text-white text-xs font-medium rounded-full mx-1"
              :class="tags[tag].color"
            >
              {{ tags[tag].text }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
