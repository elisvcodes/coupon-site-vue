<template>
  <div class="max-w-screen-xl mx-auto px-4 md:px-8">
    <div v-if="!allCouponsLoading || !searchDataLoading">
      <CouponCard
        v-for="coupon in displayedCoupons"
        :key="coupon.id"
        :discount-rate="coupon.percentageOff"
        :brand="coupon.brand.title"
        :coupon-title="coupon.title"
        :coupon-code="coupon.couponCode"
      />
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useFetchAllCoupons } from "../../api/fetchData/useFetchAllCoupons";
import { useGlobalSearch } from "../../composables/useGlobalSearch";

interface Coupon {
  id: string;
  percentageOff: string;
  title: string;
  couponCode: string;
  brand: {
    title: string;
  };
}

const { data, isLoading: allCouponsLoading } = useFetchAllCoupons();
const { searchQueryActions } = useGlobalSearch();
const searchDataLoading = searchQueryActions.isLoading;
const coupons = computed(() => data.value?.data.coupons as Coupon[]);
const searchQueryActionsData = computed(
  () => searchQueryActions.data?.value?.data?.coupons as Coupon[]
);

const displayedCoupons = computed(() => {
  return searchQueryActionsData.value || coupons.value;
});
</script>
