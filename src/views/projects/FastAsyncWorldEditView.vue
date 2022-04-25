<script lang="ts">
import { defineComponent } from "vue";
import ProjectComponent from "@/components/ProjectComponent.vue";

export default defineComponent({
  components: { ProjectComponent },
  data() {
    return {
      versions: [
        "Spigot 1.16.5 - 1.18.2",
        "Spigot 1.14.4",
        "Spigot 1.13.2",
        "Spigot 1.7.10 - 1.12.2",
        "Nukkit",
        "Forge 1.12",
        "Forge 1.11",
        "Forge 1.10",
        "Forge 1.9.4",
        "Forge 1.8.9",
        "Sponge 1.12",
        "Sponge 1.11",
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
    logo="https://raw.githubusercontent.com/IntellectualSites/FastAsyncWorldEdit/main/fawe-logo.png"
    name="FastAsyncWorldEdit"
    :show-releases="true"
    :optional-dependencies="optionalDependencies"
  >
  </ProjectComponent>
</template>
