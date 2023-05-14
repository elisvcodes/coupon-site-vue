<template>
  <section class="py-14">
    <div class="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
      <div class="max-w-xl md:mx-auto">
        <h3 class="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Let us help you save!
        </h3>
        <p class="mt-3 text-gray-600">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non
          proident.
        </p>
      </div>
      <div
        class="flex gap-3 items-center mt-4 m-auto md:justify-center lg:w-1/2"
      >
        <input
          :value="query"
          @input="handleInput"
          type="text"
          placeholder="Search for your favorite brands"
          class="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useGlobalSearch } from "../../composables/useGlobalSearch";

const { searchQueryActions, query } = useGlobalSearch();

const handleInput = (e: Event) => {
  const { value } = e.target as HTMLInputElement;

  query.value = value;
};

watch(query, () => {
  if (query.value.length > 0) {
    searchQueryActions.refetch();
  }
});
</script>
