<template>
  <div class="max-w-screen-md mx-auto px-4 py-14">
    <div class="py-14">
      <h3
        class="text-gray-800 text-center text-2xl font-bold sm:text-3xl"
        v-if="route.query.action === `signin`"
      >
        Log in to your account
      </h3>
      <h3
        class="text-gray-800 text-center text-2xl font-bold sm:text-3xl"
        v-else
      >
        Setup your account
      </h3>
    </div>

    <form class="space-y-5">
      <div>
        <label class="font-medium" for="email"> Email </label>
        <UiInputField
          id="email"
          name="email"
          type="email"
          placeholder="hello@world.com"
          required
        />
      </div>
      <div>
        <label class="font-medium" for="password"> Password </label>
        <UiInputField
          id="password"
          name="password"
          type="password"
          placeholder="••••••"
          required
        />
      </div>

      <button
        class="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
        v-if="route.query.action === `signin`"
      >
        Sign in
      </button>

      <button
        class="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
        v-else
      >
        Sign Up
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped></style>
