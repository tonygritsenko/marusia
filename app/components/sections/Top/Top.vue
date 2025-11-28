<script setup lang="ts">
import type { IMovieWithIndex } from "~/types";

const cards = ref<IMovieWithIndex[]>([]);

const { loading, error, execute } = useAsyncFetch(
  () => useFetchMovies("/movie/top10"),
  (result) => {
    cards.value = Array.isArray(result)
      ? result.map((movie, idx) => ({ ...movie, index: idx + 1 }))
      : [];
  }
);

onMounted(execute);
</script>

<template>
  <section class="top">
    <div class="container">
      <Error v-if="error" :error="error" />

      <template v-if="!loading && !error && cards.length">
        <h3 class="top__title">Топ 10&nbsp;фильмов</h3>

        <div class="top__wrapper">
          <div v-for="card in cards" :key="card.id" class="top__card">
            <span class="top__card-number">{{ card.index }}</span>
            <NuxtImg
              v-if="card.posterUrl"
              :src="card.posterUrl"
              class="top__card-image"
            />
            <div class="top__card-content">
              <p class="top__card-title">
                {{ typograf(card.title) }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style src="./Top.less" scoped lang="less" />
