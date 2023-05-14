<template>
  <div>
    <UiModal
      title="Redeem your coupon!"
      description="Rememeber, you can only redeem a coupon once!"
      :modal-state="modalState"
      @close="close"
    >
      <div class="p-2 border rounded-lg flex items-center justify-between">
        <p class="text-sm text-gray-600 overflow-hidden">{{ couponCode }}</p>
        <button class="relative text-gray-500" @click="handleCopy">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="{2}"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>

          <div
            v-if="copyCode"
            class="absolute -top-12 -left-3 px-2 py-1.5 rounded-xl bg-indigo-600 font-semibold text-white text-[10px] after:absolute after:inset-x-0 after:mx-auto after:top-[22px] after:w-2 after:h-2 after:bg-indigo-600 after:rotate-45"
          >
            Copied
          </div>
        </button>
      </div>

      <button
        class="mt-2 py-2.5 px-8 flex-1 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
        @click="redeemCoupon"
      >
        Redeem
      </button>
    </UiModal>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, Ref, ref, watch } from "vue";
import { useRedeemCoupon } from "../../api/mutateData/useRedeemCoupon";

const { modalState, couponCode, couponId } = defineProps({
  modalState: Boolean,
  couponCode: String,
  couponId: String,
});
const copyCode: Ref<boolean> = ref(false);
const { mutate: redeemCouponMutation } = useRedeemCoupon();

const handleCopy = () => {
  navigator.clipboard.writeText(couponCode!).then(
    function () {
      copyCode.value = true;
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
};

watch(copyCode, () => {
  setTimeout(() => (copyCode.value = false), 1500);
});

const redeemCoupon = () => {
  redeemCouponMutation({ id: couponId });
  close();
};

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};
</script>
