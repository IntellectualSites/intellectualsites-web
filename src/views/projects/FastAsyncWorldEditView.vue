<script lang="ts">
import { defineComponent } from "vue";
import ProjectComponent from "@/components/ProjectComponent.vue";

export default defineComponent({
  components: { ProjectComponent },
  data() {
    return {
      versions: [
        {
          title: "Spigot 1.16.5 - 1.19.1",
          icon: "https://static.spigotmc.org/img/spigot.png",
          download: "https://ci.athion.net",
        },
        {
          title: "Spigot 1.16.5 - 1.18.2",
          icon: "https://static.spigotmc.org/img/spigot.png",
          download: "https://ci.athion.net",
        },
        {
          title: "Spigot 1.14.4",
          icon: "https://static.spigotmc.org/img/spigot.png",
          download: "https://ci.athion.net",
        },
        {
          title: "Spigot 1.13.2",
          icon: "https://static.spigotmc.org/img/spigot.png",
          download: "https://ci.athion.net",
        },
        {
          title: "Spigot 1.7.10 - 1.12.2",
          icon: "https://static.spigotmc.org/img/spigot.png",
          download: "https://ci.athion.net",
        },
        {
          title: "Nukkit",
          icon: "https://raw.githubusercontent.com/Nukkit/Nukkit/master/images/logo.png",
          download: "https://ci.athion.net",
        },
        {
          title: "Forge 1.12",
          icon: "https://i.imgur.com/KAgud6s.png",
          download: "https://ci.athion.net",
        },
        {
          title: "Forge 1.11",
          icon: "https://i.imgur.com/KAgud6s.png",
          download: "https://ci.athion.net",
        },
        {
          title: "Forge 1.10",
          icon: "https://i.imgur.com/KAgud6s.png",
          download: "https://ci.athion.net",
        },
        {
          title: "Forge 1.9.4",
          icon: "https://i.imgur.com/KAgud6s.png",
          download: "https://ci.athion.net",
        },
        {
          title: "Forge 1.8.9",
          icon: "https://i.imgur.com/KAgud6s.png",
          download: "https://ci.athion.net",
        },
        {
          title: "Sponge 1.12",
          icon: "https://spongepowered.org/assets/img/icons/spongie-mark-dark.svg",
          download: "https://ci.athion.net",
        },
        {
          title: "Sponge 1.11",
          icon: "https://spongepowered.org/assets/img/icons/spongie-mark-dark.svg",
          download: "https://ci.athion.net",
        },
      ],
      optionalDependencies: [
        {
          title: "Self-hosted Webinterface",
          url: "/",
        },
        {
          title: "FastAsyncVoxelSniper",
          url: "/",
        },
      ],
    };
  },
});
</script>

<template>
  <ProjectComponent
    :versions="versions"
    repository="FastAsyncWorldEdit"
    logo="https://raw.githubusercontent.com/IntellectualSites/Assets/main/plugins/FastAsyncWorldEdit/FastAsyncWorldEdit.svg"
    name="FastAsyncWorldEdit"
    :show-releases="true"
    :optional-dependencies="optionalDependencies"
  >
  </ProjectComponent>
</template>
