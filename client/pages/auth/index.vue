<template>
  <div class="max-w-screen-md mx-auto px-4 py-14">
    <div class="py-14">
      <h3
        class="text-gray-800 text-center text-2xl font-bold sm:text-3xl"
        v-if="route.query.action === `signin`"
      >
        Log in to your account
      </h3>
      <h3
        class="text-gray-800 text-center text-2xl font-bold sm:text-3xl"
        v-else
      >
        Setup your account
      </h3>
    </div>

    <form
      class="space-y-5"
      @submit.prevent="
        route.query.action === `signin`
          ? handleLoginUser()
          : handleRegisterUser()
      "
    >
      <div>
        <label class="font-medium" for="email"> Email </label>
        <UiInputField
          id="email"
          name="email"
          type="email"
          placeholder="hello@world.com"
          required
          :value="formData.email"
          @input="handleFields($event)"
        />
      </div>
      <div>
        <label class="font-medium" for="password"> Password </label>
        <UiInputField
          id="password"
          name="password"
          type="password"
          placeholder="••••••"
          required
          :value="formData.password"
          @input="handleFields($event)"
        />
      </div>

      <button
        class="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
        v-if="route.query.action === `signin`"
      >
        Sign in
      </button>

      <button
        class="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
        v-else
      >
        Sign Up
      </button>
    </form>
    <p class="text-red-500 text-center mt-5">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import { useRoute } from "vue-router";
import { registerUser, loginUser } from "../../api/mutateData/auth";

interface FormData {
  email: string;
  password: string;
}

const route = useRoute();
const errorMessage: Ref<String | null> = ref(null);
const formData: Ref<FormData> = ref({ email: "", password: "" });

const handleFields = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const { name, value } = target;
  if (name in formData.value) {
    formData.value[name as keyof FormData] = value;
  }
};

const handleRegisterUser = async () => {
  try {
    const res = await registerUser(formData.value);
    if (res.status === 201) {
      console.log("jkjkl", res.data);
    }
  } catch (error: any) {
    errorMessage.value = error.response.data.message;

    setTimeout(() => {
      errorMessage.value = "";
    }, 2000);
  }
};
const handleLoginUser = async () => {
  try {
    const res = await loginUser(formData.value);
    if (res.status === 200) {
      console.log("jkjkl", res.data);
    }
  } catch (error: any) {
    errorMessage.value = error.response.data.message;

    setTimeout(() => {
      errorMessage.value = "";
    }, 2000);
  }
};
</script>
