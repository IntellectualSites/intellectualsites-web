<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <p
        class="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        {{ $t("team.title") }}
      </p>
    </div>
    <div
      v-if="members !== undefined"
      class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 gap-5 my-6 max-w-7xl text-l text-gray-700 lg:mx-auto"
    >
      <a
        v-for="member in members"
        v-bind:key="member.id"
        class="bg-white shadow-lg rounded-lg p-3 hover:cursor-pointer hover:scale-105 transition-all text-center"
        :href="member.html_url"
      >
        <img :src="member.avatar_url" class="w-32 rounded-full p-5" />
        <span class="text-center">{{ member.login }}</span>
      </a>
    </div>
    <div v-else>
      <LoadingComponent></LoadingComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoadingComponent from "@/components/LoadingComponent.vue";

declare type Member = {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
};
export default defineComponent({
  components: { LoadingComponent },
  data() {
    return {
      members: undefined as Member[] | undefined,
    };
  },
  mounted() {
    fetch(`https://api.github.com/orgs/intellectualsites/members`)
      .then((value) => value.json())
      .then((data) => data.filter((member: Member) => member.id !== 95638266)) // remove intellectualsites-bot
      .then((members) => (this.members = members));
  },
});
</script>
