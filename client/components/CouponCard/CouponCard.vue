<template>
  <div>
    <UiCard>
      <div
        class="w-full flex flex-col items-start gap-3 md:flex-row md:justify-between md:items-start"
      >
        <div class="flex items-center justify-center gap-x-3">
          <div>
            <span
              class="flex items-center justify-center bg-white w-14 h-14 border rounded-full"
              >{{ discountRate }}</span
            >
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
          @click.stop="toggleModal"
        >
          Redeem
        </button>
      </div>
    </UiCard>
    <RedeemModal
      :modal-state="modalState"
      @close="toggleModal"
      :couponCode="`abc`"
    ></RedeemModal>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, defineProps } from "vue";
const { discountRate, brand, couponTitle, couponCode } = defineProps({
  discountRate: { type: String, required: true },
  brand: { type: String, required: true },
  couponTitle: { type: String, required: true },
  couponCode: { type: String, required: true },
});

const modalState: Ref<boolean> = ref(false);

const toggleModal = () => {
  modalState.value = !modalState.value;
};
</script>
