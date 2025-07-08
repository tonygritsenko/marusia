<script setup lang="ts">
const nuxtApp = useNuxtApp();

const loading = ref(true);

nuxtApp.hook("page:finish", () => {
  setTimeout(() => {
    loading.value = false;
  }, 500);
});
</script>

<template>
  <!-- <LoadingError v-if="loading" /> -->
  <NuxtLayout >
    <NuxtPage />
  </NuxtLayout>
</template>
