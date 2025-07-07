<script setup lang="ts">
import type { IMovie, IMovieWithIndex } from "~/types";

const cards = ref<IMovieWithIndex[]>([]);

const { loading, error, execute } = useAsyncFetch(
  async () => await useFetchMovies("/movie/top10"),
  (result) => {
    if (Array.isArray(result)) {
      cards.value = result.map((card, idx) => ({ ...card, index: idx + 1 }));
    } else {
      cards.value = [];
    }
  }
);

onMounted(execute);
</script>

<template>
  <section class="top">
    <div class="container">
      <h3 class="top__title">Топ 10&nbsp;фильмов</h3>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else>
        <div v-for="card in cards" :key="card.id" class="top__card">
          <span class="top__card-number">{{ card.index }}</span>
          <img
            :src="card.posterUrl"
            :alt="card.title"
            class="top__card-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.error {
  color: red;
  font-weight: bold;
  margin: 1rem 0;
}
</style>
