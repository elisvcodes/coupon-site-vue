<template>
  <nav class="bg-white border-b">
    <div
      class="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8"
    >
      <div class="flex gap-1 cursor-pointer items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <NuxtLink to="/"> Couponie </NuxtLink>
      </div>
      <div class="flex-1 flex items-center">
        <div
          class="bg-white absolute z-20 w-full top-12 left-0 p-4 border-b lg:static lg:flex lg:border-none md:justify-end"
          :class="menuItem ? '' : 'hidden'"
        >
          <ul class="space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
            <li><NuxtLink to="/auth?action=signup">Sign up</NuxtLink></li>
            <li><NuxtLink to="/auth?action=signin">Login</NuxtLink></li>
            <li>
              <NuxtLink
                role="button"
                class="p-2 indigo-button rounded text-sm"
                to="/add"
                >Add Coupon</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div
          class="flex-1 flex items-center justify-end space-x-2 sm:space-x-6"
        >
          <button
            class="outline-none text-gray-400 block lg:hidden"
            @click="handleClick"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              v-if="menuItem"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              v-else
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, Ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const menuItem: Ref<boolean> = ref(false);

watch(
  route,
  () => {
    menuItem.value = false;
  },
  { deep: true, immediate: true }
);

const handleClick = () => {
  menuItem.value = !menuItem.value;
};
</script>
