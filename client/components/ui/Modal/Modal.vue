<template>
  <div class="fixed inset-0 z-50 overflow-y-auto" v-if="modalState">
    <div
      class="fixed inset-0 w-full h-full bg-black opacity-40"
      @click.stop="close"
    ></div>
    <div class="flex items-center min-h-screen px-4 py-8">
      <div
        class="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg"
      >
        <div class="py-3 space-y-4">
          <div class="flex items-start justify-between">
            <div>
              <h4 class="text-lg font-medium text-gray-800">
                {{ title }}
              </h4>
              <p class="text-[15px] text-gray-600 mt-4">
                {{ description }}
              </p>
            </div>
            <button
              class="p-2 text-gray-400 rounded-md hover:bg-gray-100"
              @click.stop="close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <slot> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const { title, description, modalState } = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  modalState: { type: Boolean, required: true },
});

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};
</script>
