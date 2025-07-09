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
  <Loading :loading="loading" v-if="loading" />
  
  <NuxtLayout >
    <NuxtPage />
  </NuxtLayout>
</template>
