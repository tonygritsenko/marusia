<!-- Random.vue -->
<script setup lang="ts">
import type { IMovie } from "~/types";

const card = ref<IMovie[]>([]);

const { loading, error, execute } = useAsyncFetch(
  async () => {
    const result = await useFetchMovies("/movie/random");
    return result;
  },
  (result) => {
    // Additional validation before setting card data
    if (result && typeof result === "object" && !("name" in result)) {
      card.value = Array.isArray(result) ? result : [result];
    } else {
      throw new Error("Invalid data received from API");
    }
  }
);

onMounted(execute);
</script>

<template>
  <section class="random">
    <div class="container">
      <span v-if="loading">Loading...</span>
      <div v-else-if="error" class="error">{{ error }}</div>
      <template v-else-if="card.length > 0">
        <div v-for="movie in card" :key="movie.id" class="random__wrapper">
          <div class="random__left">
            <div class="random__top">
              <div class="random__rate">
                <Icon name="Star" />
                {{ movie.tmdbRating }}
              </div>
              <span class="random__year">{{ movie.releaseYear }}</span>
              <span class="random__genre">
                {{ formatGenres(movie.genres) }}
              </span>
              <span class="random__duration">
                {{ formatRuntime(movie.runtime) }}
              </span>
            </div>
            <h2 class="random__title">{{ typograf(movie.title) }}</h2>
            <p class="random__text">{{ typograf(movie.plot) }}</p>
          </div>
          <NuxtImg :src="movie.posterUrl" />
        </div>
      </template>
      <div v-else class="error">No movies found</div>
    </div>
  </section>
</template>

<style scoped></style>
