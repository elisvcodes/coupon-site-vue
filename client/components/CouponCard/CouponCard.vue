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
              >{{ couponData.percentageOff }}</span
            >
          </div>
          <div class="text-base text-gray-800 font-semibold mt-1">
            <span class="block text-sm text-indigo-600 font-medium">{{
              couponData.brand.title
            }}</span>
            <p>{{ couponData.title }}</p>
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
      :couponCode="couponData.couponCode"
      :coupon-id="couponData.id"
    ></RedeemModal>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Ref, ref, defineProps } from "vue";

interface Coupon {
  id: string;
  percentageOff: string;
  title: string;
  couponCode: string;
  brand: {
    title: string;
  };
}

const { couponData } = defineProps({
  couponData: { type: Object as PropType<Coupon>, required: true },
});

const modalState: Ref<boolean> = ref(false);

const toggleModal = () => {
  modalState.value = !modalState.value;
};
</script>
