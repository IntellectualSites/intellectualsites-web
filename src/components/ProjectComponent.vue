<script lang="ts">
import { defineComponent } from "vue";
import { marked } from "marked";
import { RENDERER } from "@/config/marked";

declare type Version = {
  icon: string;
  title: string;
  download: string;
};

export default defineComponent({
  props: {
    name: String,
    logo: String,
    repository: String,
    versions: Array as () => Version[],
    showReleases: Boolean,
    optionalDependencies: Array as () => {
      title: string;
      url: string;
    }[],
  },
  data() {
    return {
      selected: undefined as Version | undefined,
      hovered: undefined as string | undefined,
      collapsed: true,
      releases: [] as {
        id: number;
        published_at: string;
        name: string;
        body: string;
      }[],
    };
  },
  mounted() {
    this.$data.selected = (this.$props.versions ?? [])[0];
    if (this.$props.showReleases) {
      marked.use({
        renderer: RENDERER,
      });
      fetch(
        `https://api.github.com/repos/intellectualsites/${this.repository}/releases`
      )
        .then((value) => value.json())
        .then((value) => (this.releases = value));
    }
  },
  methods: {
    md(src: string) {
      return marked(src);
    },
    collapse(state: boolean) {
      this.collapsed = state;
    },
    changeVersion(value: Version) {
      this.selected = value;
      this.collapse(true);
    },
  },
});
</script>

<template>
  <main class="container mx-auto px-6">
    <div class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          class="flex items-center justify-center mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl h-20 lg:mb-6 mb-12"
        >
          <img v-if="logo" class="h-20 inline" :src="logo" :alt="name" />
          {{ name }}
        </p>

        <div v-if="selected !== undefined">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Download {{ name }}
                </h3>
                <p class="mt-1 text-sm text-gray-600">
                  Download the newest build from our CI.
                </p>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <div class="shadow sm:rounded-md">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div class="bg-red-500 text-white rounded-lg p-3 text-sm">
                    Please ensure the correct platform & version is selected
                    above.
                    <br />
                    Versions labeled as "Spigot" run on
                    <a href="https://papermc.io">Paper</a>
                    as well.
                    <br />
                    Versions below 1.16.5 are classified as legacy and receive
                    no support.
                  </div>
                  <div class="flex items-center space-x-3">
                    <label
                      id="listbox-label"
                      class="block text-sm font-bold text-gray-700"
                    >
                      Version:
                    </label>
                    <div
                      class="my-1 relative w-full"
                      v-click-outside="() => collapse(true)"
                    >
                      <button
                        type="button"
                        class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        aria-haspopup="listbox"
                        aria-expanded="true"
                        aria-labelledby="listbox-label"
                        @click.prevent="collapse(!collapsed)"
                      >
                        <span class="flex items-center">
                          <img
                            :src="selected.icon"
                            alt=""
                            class="flex-shrink-0 h-6 rounded-full"
                          />
                          <span class="ml-3 block truncate">
                            {{ selected.title }}
                          </span>
                        </span>
                        <span
                          class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
                        >
                          <svg
                            class="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                      <transition
                        leave-active-class="transition ease-in duration-100"
                        leave-from-class="opacity-100"
                        leave-to-class="opacity-0"
                        v-if="!collapsed"
                      >
                        <ul
                          class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                          tabindex="-1"
                        >
                          <li
                            v-for="version in versions"
                            v-bind:key="version.title"
                            class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                            id="listbox-option-0"
                            role="option"
                            :class="
                              hovered === version.title ? 'bg-is-red-600' : ''
                            "
                            @click.prevent="changeVersion(version)"
                          >
                            <div
                              class="flex items-center"
                              @mouseover="hovered = version.title"
                              @mouseleave="hovered = undefined"
                              :class="
                                hovered === version.title ? 'text-white' : ''
                              "
                            >
                              <img
                                :src="version.icon"
                                alt=""
                                class="flex-shrink-0 h-6 rounded-full"
                              />
                              <span
                                class="ml-3 block truncate"
                                :class="
                                  version === selected
                                    ? 'font-semibold'
                                    : 'font-normal'
                                "
                              >
                                {{ version.title }}
                              </span>
                            </div>
                            <span
                              v-if="version === selected"
                              class="absolute inset-y-0 right-0 flex items-center pr-4"
                              :class="
                                hovered === version.title
                                  ? 'text-white'
                                  : 'text-is-red-darker'
                              "
                            >
                              <svg
                                class="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </span>
                          </li>
                        </ul>
                      </transition>
                    </div>
                  </div>
                  <!-- Download -->
                  <div class="text-center">
                    <button
                      type="button"
                      class="text-white bg-is-red hover:bg-is-red-darker font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                    >
                      Download {{ name }} ({{ selected.title }})
                      <svg
                        class="w-5 h-5 ml-4 -mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden sm:block" aria-hidden="true">
          <div class="py-5">
            <div class="border-t border-gray-200"></div>
          </div>
        </div>

        <div class="mt-10 sm:mt-0" v-if="optionalDependencies">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Install optional dependencies
                </h3>
                <p class="mt-1 text-sm text-gray-600">
                  You can install further addons for {{ name }} which may be
                  suitable for your purpose.
                </p>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <div class="shadow sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6 flex flex-wrap space-x-3">
                  <template
                    v-for="dependency in optionalDependencies"
                    v-bind:key="dependency.title"
                  >
                    <RouterLink
                      :to="dependency.url"
                      type="button"
                      class="text-white bg-is-red hover:bg-is-red-darker font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                    >
                      {{ dependency.title }}
                    </RouterLink>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="hidden sm:block"
          aria-hidden="true"
          v-if="optionalDependencies"
        >
          <div class="py-5">
            <div class="border-t border-gray-200"></div>
          </div>
        </div>

        <div class="mt-10 sm:mt-0">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Configuration
                </h3>
                <p class="mt-1 text-sm text-gray-600">
                  Configure the plugin and set the correct permissions for your
                  players.
                </p>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
              <div class="shadow sm:rounded-md">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">test</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
