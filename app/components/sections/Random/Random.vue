<script setup lang="ts">
import type { IMovie } from "~/types";

const card = ref<IMovie[]>([]);

const { loading, error, execute } = useAsyncFetch(
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
      <Error v-if="error" :error="error" />

      <template v-if="!loading && !error && card.length">
        <div v-for="movie in card" :key="movie.id" class="random__wrapper">
          <div class="random__left">
            <MovieTop
              :movie="movie"
              leftTopClass="random__left-top"
              rateClass="random__rate"
              rateIconClass="random__rate-icon"
              yearClass="random__year"
              genreClass="random__genre"
              durationClass="random__duration"
            />

            <h2 class="random__title">{{ typograf(movie.title) }}</h2>
            <p class="random__text">{{ typograf(movie.plot) }}</p>

            <div class="random__left-bottom">
              <button class="random__button random__button--blue">
                Трейлер
              </button>
              <NuxtLink class="random__link">О&nbsp;фильме</NuxtLink>
              <button class="random__button random__button--small">
                <Icon name="Heart" />
              </button>
              <button
                @click="execute"
                class="random__button random__button--small"
              >
                <Icon name="Reload" />
              </button>
            </div>
          </div>
          <div class="random__right">
            <NuxtImg
              v-if="movie.posterUrl"
              :src="movie.posterUrl"
              :alt="movie.title"
              class="random__image"
            />
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style src="./Random.less" lang="less" />
