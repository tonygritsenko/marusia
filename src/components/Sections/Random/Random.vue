<!-- Random.vue -->
<script setup lang="ts">
import type { IMovie } from "~/types";

const card = ref<IMovie[]>([]);

const { execute } = useAsyncFetch(
  () => useFetchMovies("/movie/random"),
  (result) => {
    card.value = Array.isArray(result) ? result : [result];
  }
);

onMounted(execute);
</script>

<template>
  <section class="random">
    <div class="container">
      <div v-for="movie in card" :key="movie.id" class="random__wrapper">
        <div class="random__left">
          <div class="random__left-top">
            <div class="random__rate">
              <Icon name="Star" class="random__rate-icon" />
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

          <div class="random__left-bottom">
            <button class="random__button random__button--blue">Трейлер</button>
            <NuxtLink class="random__link">О&nbsp;фильме</NuxtLink>
            <button class="random__button random__button--small">
              <Icon name="Heart" />
            </button>
            <button class="random__button random__button--small">
              <Icon name="Reload" />
            </button>
          </div>
        </div>
        <div class="random__right">
          <NuxtImg :src="movie.posterUrl" class="random__image" />
        </div>
      </div>
    </div>
  </section>
</template>

<style src="./Random.less" scoped lang="less" />
