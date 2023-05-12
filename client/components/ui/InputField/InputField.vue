<template>
  <input
    :id="id"
    :type="type"
    :required="required"
    :placeholder="placeholder"
    class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
  />
</template>

<script setup lang="ts">
import { PropType } from "vue";

interface Size {
  base: String;
  md: String;
  lg: String;
}

const {
  id,
  type,
  name,
  required = false,
  placeholder,
} = defineProps({
  id: { type: String, required: false },
  type: { type: String, required: true },
  name: { type: String, required: true },
  placeholder: { type: String, required: true },
  required: { type: Boolean },
});
</script>
