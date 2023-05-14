<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useProvideAuth } from "../composables/useAuth";
import { useProviderGloablSearch } from "../composables/useGlobalSearch";
useProvideAuth();
useProviderGloablSearch();
</script>
