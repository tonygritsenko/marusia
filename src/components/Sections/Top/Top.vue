<!-- Top.vue -->
<script setup lang="ts">
import { NuxtImg } from "#components";
import type { IMovieWithIndex } from "~/types";

const cards = ref<IMovieWithIndex[]>([]);

const { execute } = useAsyncFetch(
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
      <h3 class="top__title">Топ 10&nbsp;фильмов</h3>

      <div class="top__wrapper">
        <div v-for="card in cards" :key="card.id" class="top__card">
          <span class="top__card-number">{{ card.index }}</span>
          <NuxtImg
            :src="card.posterUrl"
            :alt="card.title"
            class="top__card-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style src="./Top.less" scoped lang="less" />
