<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup(): {
    sponsors: {
      title: string;
      img: string;
      text: string;
      url: string;
    }[];
  } {
    return {
      sponsors: [
        {
          title: "Athion",
          img: "https://www.athion.net/wp-content/uploads/2017/01/Athion-Logo-1.png",
          text:
            "Athion is the result of the merging of two of the oldest creative servers around in the community – " +
            "Mithrintia and Pwego-Insomnia – fusing together to perfect a creative experience like no other to develop " +
            "and harness your skills.",
          url: "https://www.athion.net",
        },
        {
          title: "Crowdin",
          img: "https://support.crowdin.com/assets/logos/crowdin-dark-symbol.png",
          text:
            "Crowdin Enterprise is a cloud-based solution that streamlines localization management for your team. " +
            "It's the perfect place to effectively manage all of your multilingual content. " +
            "We're using Crowdin Enterprise to manage and work on translations for our software. " +
            "Crowdin Enterprise is a completely new product built for companies and organizations. " +
            "Gain more control over localization with enterprise-level security, customization, and flexibility.",
          url: "https://crowdin.com/enterprise",
        },
        {
          title: "JetBrains",
          img: "https://i.imgur.com/uNb5fMb.png",
          text:
            "JetBrains provides us a variety of products customizable without a limit. " +
            "JetBrains is a software development company whose tools are targeted towards software developers and project managers. " +
            "The company offers an extended family of integrated development environments (IDE) for the programming languages " +
            "Java, Groovy, Kotlin, Ruby, Python, and many others!",
          url: "https://www.jetbrains.com/",
        },
        {
          title: "Pixel²",
          img: "https://i.imgur.com/PpUWXkv.png",
          text:
            "Pixel² is an indie games studio started out of Northern Ireland in 2017 and growing worldwide. " +
            "We are partnered with Microsoft to provide you with thrilling adventure maps, stunning texture packs, and " +
            "stylish skins, which can all be found on the official Minecraft Marketplace. ",
          url: "https://pixelsquared.studio/",
        },
        {
          title: "YourKit",
          img: "https://www.yourkit.com/images/yklogo.png",
          text:
            "YourKit supports open source projects with innovative and intelligent tools for monitoring and profiling " +
            "Java and .NET applications. YourKit is the creator of YourKit Java Profiler, YourKit .NET Profiler, and YourKit YouMonitor. " +
            "We are using YourKit to profile the performance of our plugins.",
          url: "https://www.yourkit.com/java/profiler/",
        },
      ],
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
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Sponsors
          </p>
          <p class="mt-4 max-w-3xl text-l text-gray-700 lg:mx-auto">
            Below you can find organizations and networks sponsoring our
            projects.
            <br />
            Interested? <RouterLink to="/contact" class="text-is-red">Contact us.</RouterLink>
          </p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <div
          v-for="sponsor in sponsors"
          v-bind:key="sponsor.title"
          class="bg-white p-5 shadow rounded grid lg:grid-cols-4 gap-8 items-center mb-4 hover:scale-105 transition-all"
        >
          <div class="text-center">
            <a :href="sponsor.url">
              <img
                class="inline max-h-28"
                :src="sponsor.img"
                :alt="sponsor.title"
              />
            </a>
          </div>
          <div class="col-span-3">
            <p
              class="mb-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl"
            >
              <a :href="sponsor.url">
                {{ sponsor.title }}
              </a>
            </p>
            {{ sponsor.text }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
