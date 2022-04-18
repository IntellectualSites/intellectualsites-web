<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<template>
  <main class="container mx-auto px-6">
    <div class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <p
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Contact
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            You can contact us on several ways:
          </p>
        </div>

        <div class="mt-10">
          <dl
            class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10"
          >
            <div class="relative justify-self-center">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                >
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Mail
                </p>
              </dt>
              <dd class="ml-16 text-base text-gray-500">
                <a href="mailto:contact@intellectualsites.com"
                  >contact@intellectualsites.com</a
                >
              </dd>
            </div>

            <div class="relative justify-self-center">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                >
                  <img src="../assets/icons/github-white.svg" class="h-6" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  GitHub
                </p>
              </dt>
              <dd class="ml-16 text-base text-gray-500">
                <a href="https://github.com/NotMyFault">@NotMyFault</a>
              </dd>
            </div>

            <div class="relative justify-self-center">
              <dt>
                <div
                  class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                >
                  <img src="../assets/icons/discord.svg" class="h-6" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Discord
                </p>
              </dt>
              <dd class="ml-16 text-base text-gray-500">
                <a href="https://discord.com/users/254790994594234370"
                  >NotMyFault#3732</a
                >
              </dd>
            </div>
          </dl>
        </div>

        <div class="lg:text-center mt-10">
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            If you need help with our software, please join our discord.
          </p>
        </div>
      </div>
    </div>
    <iframe
      src="https://discord.com/widget?id=268444645527126017&theme=dark"
      width="350"
      height="500"
      allowtransparency="true"
      frameborder="0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      class="mb-5 mx-auto"
    ></iframe>
  </main>
</template>
