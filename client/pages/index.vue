<template>
  <div>
    <Hero />
    <DisplayCoupons />
  </div>
</template>

<script setup lang="ts">
import { useProvideAuth } from "../composables/useAuth";
const auth = useProvideAuth();
</script>
