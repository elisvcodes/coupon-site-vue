<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useProvideAuth } from "../composables/useAuth";

useProvideAuth();
</script>
