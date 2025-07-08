<!-- LoadingError.vue -->
<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  loading: boolean;
  error: string | null | undefined;
}>();
</script>
