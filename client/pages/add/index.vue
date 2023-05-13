<template>
  <div class="max-w-screen-md mx-auto px-4 py-14">
    <div class="py-14">
      <h3 class="text-gray-800 text-center text-2xl font-bold sm:text-3xl">
        Add Coupon
      </h3>
    </div>

    <form class="space-y-5" @submit.prevent="handleCouponCreation()">
      <div>
        <label class="font-medium" for="title"> Title </label>
        <UiInputField
          id="title"
          name="title"
          type="text"
          placeholder="Save 25% off on your next iPhone"
          required
          :value="formData.title"
          @input="handleFields($event)"
        />
      </div>
      <div>
        <label class="font-medium" for="brand"> Brand </label>
        <UiInputField
          id="brand"
          name="brand"
          type="text"
          placeholder="Save 25% off on your next iPhone"
          required
          :value="formData.brand"
          @input="handleFields($event)"
        />
      </div>
      <div>
        <label class="font-medium" for="percentageOff"> Percentage Off </label>
        <UiInputField
          id="percentageOff"
          name="percentageOff"
          type="text"
          placeholder="25%"
          required
          :value="formData.percentageOff"
          @input="handleFields($event)"
        />
      </div>
      <div>
        <label class="font-medium" for="couponCode"> Coupon code </label>
        <UiInputField
          id="couponCode"
          name="couponCode"
          type="text"
          placeholder="25%"
          required
          :value="formData.couponCode"
          @input="handleFields($event)"
        />
      </div>

      <button class="w-full px-4 py-2 indigo-button rounded-md duration-150">
        Add
      </button>
    </form>
    <p class="text-red-500 text-center mt-5">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";
import { useCreateCoupon } from "../../api/mutateData/useCreateCoupon";

interface FormData {
  title: string;
  brand: string;
  percentageOff: string;
  couponCode: string;
}

const router = useRouter();
const errorMessage: Ref<String | null> = ref(null);
const formData: Ref<FormData> = ref({
  title: "",
  brand: "",
  percentageOff: "",
  couponCode: "",
});

const { mutateAsync: createCouponMutation } = useCreateCoupon();

const handleFields = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const { name, value } = target;
  if (name in formData.value) {
    formData.value[name as keyof FormData] = value;
  }
};

const handleCouponCreation = async () => {
  try {
    const res = await createCouponMutation({ ...formData.value });
    if (res.status === 201) {
      router.push("/");
    }
  } catch (error: any) {
    errorMessage.value = error.response.data.message;

    setTimeout(() => {
      errorMessage.value = "";
    }, 2000);
  }
};
</script>
