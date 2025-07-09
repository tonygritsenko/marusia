<script setup lang="ts">
defineProps<{
  error: string | null;
}>();
</script>

<template>
  <div class="error">{{ error }}</div>
</template>

<style scoped lang="less">
.error {
  margin: 1rem 0;
  font-size: 24px;
  font-weight: bold;
  color: red;
}
</style>
