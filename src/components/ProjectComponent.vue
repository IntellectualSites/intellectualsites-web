<script lang="ts">
import { defineComponent } from "vue";
import { marked } from "marked";
import { RENDERER } from "@/config/marked";

export default defineComponent({
  props: {
    name: String,
    logo: String,
    repository: String,
    versions: Array,
    showReleases: Boolean,
  },
  data() {
    return {
      selected: "",
      hovered: undefined,
      collapsed: true,
      releases: "",
    };
  },
  mounted() {
    this.$data.selected = (this.$props.versions ?? [""])[0] as string;
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
  },
});
</script>

<template>
  <main class="container mx-auto px-6">
    <div class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl h-20"
        >
          <img v-if="logo" class="h-20 inline" :src="logo" :alt="name" />
          {{ name }}
        </p>
        <div>
          <label
            id="listbox-label"
            class="block text-sm font-bold text-gray-700"
          >
            Version
          </label>
          <div class="my-1 relative">
            <button
              type="button"
              class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              aria-haspopup="listbox"
              aria-expanded="true"
              aria-labelledby="listbox-label"
              @click.prevent="collapsed = !collapsed"
            >
              <span class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  class="flex-shrink-0 h-6 w-6 rounded-full"
                />
                <span class="ml-3 block truncate"> {{ selected }} </span>
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
                  v-bind:key="version"
                  class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                  id="listbox-option-0"
                  role="option"
                  :class="hovered === version ? 'bg-indigo-600' : ''"
                  @click.prevent="selected = version"
                >
                  <div
                    class="flex items-center"
                    @mouseover="hovered = version"
                    @mouseleave="hovered = undefined"
                    :class="hovered === version ? 'text-white' : ''"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      class="flex-shrink-0 h-6 w-6 rounded-full"
                    />
                    <span
                      class="ml-3 block truncate"
                      :class="
                        version === selected ? 'font-semibold' : 'font-normal'
                      "
                    >
                      {{ version }}
                    </span>
                  </div>
                  <span
                    v-if="version === selected"
                    class="absolute inset-y-0 right-0 flex items-center pr-4"
                    :class="
                      hovered === version ? 'text-white' : 'text-indigo-600'
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
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          Download {{ name }} <br> {{ selected }}
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

        <div v-if="showReleases">
          <p
            class="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl h-20"
          >
            Releases
          </p>
          <ol class="relative border-l border-gray-200 -mt-10" v-if="releases">
            <li
              class="mb-10 ml-4"
              v-for="release in releases"
              v-bind:key="release.id"
            >
              <div
                class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"
              ></div>
              <time class="mb-1 text-sm font-normal leading-none text-gray-400">
                {{ new Date(release.published_at).toDateString() }}
              </time>
              <h3 class="text-lg font-semibold text-gray-900">
                {{ release.name }}
              </h3>
              <p
                class="mb-4 text-base font-normal text-gray-700"
                v-html="md(release.body)"
              ></p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </main>
</template>
