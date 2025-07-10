<script setup lang="ts">
const nuxtApp = useNuxtApp();

const loading = ref(true);

nuxtApp.hook("page:finish", () => {
  setTimeout(() => {
    loading.value = false;
  }, 100);
});
</script>

<template>
  <Transition name="fade" mode="out-in">
    <Loading :loading="loading" v-if="loading" />
  </Transition>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
