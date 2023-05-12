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
        class="flex gap-3 items-center mt-4 m-auto md:justify-center md:w-1/2"
      >
        <form className="w-full items-center justify-center sm:flex">
          <input
            type="text"
            placeholder="Search for your favorite brands"
            className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
          />
          <button
            className="w-full mt-3 px-5 py-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
