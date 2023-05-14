<template>
  <div class="max-w-screen-xl mx-auto px-4 md:px-8">
    <div v-if="!isLoading">
      <CouponCard
        v-for="coupon in coupons"
        :key="coupon.id"
        :discount-rate="coupon.percentageOff"
        :brand="coupon.brand.title"
        :coupon-title="coupon.title"
      />
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useFetchAllCoupons } from "../../api/fetchData/useFetchAllCoupons";

interface Coupon {
  id: string;
  percentageOff: string;
  title: string;
  brand: {
    title: string;
  };
}

const { data, isLoading } = useFetchAllCoupons();
const coupons = computed(() => data.value?.data.coupons as Coupon[]);
</script>
