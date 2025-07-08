<script setup lang="ts">
defineProps<{
  loading: boolean;
  error: string | null | undefined;
}>();
</script>

<template>
  <div class="container container--le">
    <div v-if="loading" class="loading">Loading . . .</div>
    <div v-else-if="error" class="error">{{ error }}</div>
  </div>
</template>
