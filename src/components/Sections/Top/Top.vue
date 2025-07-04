<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { IMovie } from '@/types/IMovie';

interface IMovieWithIndex extends IMovie {
  index: number;
}

const cards = ref<IMovieWithIndex[]>([]);

onMounted(async () => {
  const data = await useFetchTop10();
  if (Array.isArray(data)) {
    cards.value = data.map((card, idx) => ({ ...card, index: idx + 1 }));
  }
});
</script>

<template>
  <section class="top">
    <div class="container">
      <h3 class="top__title">Топ 10&nbsp;фильмов</h3>
      <div v-for="card in cards" :key="card.id" class="top__card">
        <span class="top__card-number">{{ card.index }}</span>
        <img :src="card.posterUrl" :alt="card.title" class="top__card-image">
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
