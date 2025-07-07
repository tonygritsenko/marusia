<script setup lang="ts">
import type { IMovie } from "~/types";

const card = ref<IMovie[]>([]);

const { loading, error, execute } = useAsyncFetch(
  async () => await useFetchMovies("/movie/random"),
  (result) => {
    card.value = Array.isArray(result) ? result : [result];
  }
);

onMounted(execute);
</script>

<template>
  <section class="rendom">
    <div class="container">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else>
        <div v-for="movie in card" :key="movie.id" class="movie-card">
          <h3>{{ movie.title }}</h3>
          <p>{{ movie.plot }}</p>
          <!-- Add more movie details as needed -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
