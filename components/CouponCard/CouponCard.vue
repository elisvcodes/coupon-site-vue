<template>
  <UiCard>
    <div
      class="w-full flex flex-col items-center gap-3 md:flex-row md:justify-between"
    >
      <div class="flex items-center justify-center gap-x-3">
        <div
          class="flex items-center justify-center bg-white w-14 h-14 border rounded-full"
        >
          {{ discountRate }}
        </div>
        <div class="text-base text-gray-800 font-semibold mt-1">
          <span class="block text-sm text-indigo-600 font-medium">{{
            brand
          }}</span>
          <p>{{ couponTitle }}</p>
        </div>
      </div>
      <button
        class="w-full px-5 py-2 rounded-md indigo-button sm:mt-0 sm:ml-3 sm:w-auto"
      >
        Redeem
      </button>
    </div>
  </UiCard>
</template>

<script setup lang="ts">
const { discountRate, brand, couponTitle } = defineProps({
  discountRate: { type: String, required: true },
  brand: { type: String, required: true },
  couponTitle: { type: String, required: true },
});
</script>
