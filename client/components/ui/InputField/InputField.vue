<template>
  <input
    :id="id"
    :name="name"
    :type="type"
    :required="required"
    :placeholder="placeholder"
    :value="value"
    class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
  />
</template>

<script setup lang="ts">
import { PropType } from "vue";

const {
  id,
  type,
  name,
  placeholder,
  required = false,
  value,
} = defineProps({
  id: { type: String, required: false },
  type: { type: String, required: true },
  name: { type: String, required: true },
  placeholder: { type: String, required: true },
  required: { type: Boolean },
  value: { type: String, required: true },
});
</script>
