<script setup lang="ts">
import type { IMovie } from "~/types";

const searchQuery = ref("");
const showResults = ref(false);

const fetcher = (): Promise<IMovie[]> =>
  useFetchMovies<IMovie[]>
    (`/movie?title=${encodeURIComponent(searchQuery.value)}`);
const { data, error, execute } = useAsyncFetch<IMovie[]>(fetcher);

async function onKeyup(e: KeyboardEvent) {
  if (e.key === "Enter" || e.key === " ") {
    await execute();
    showResults.value = !!(data.value && data.value.length && searchQuery.value.trim());
  } else if (searchQuery.value.trim() === "") {
    data.value = null;
    showResults.value = false;
  }
}

function onFocus() {
  showResults.value = !!(data.value && data.value.length && searchQuery.value.trim());
}

function handleClickOutside(event: MouseEvent) {
  const search = document.querySelector(".header__search");
  if (search && !search.contains(event.target as Node)) {
    showResults.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <NuxtLink class="header__link">
          <NuxtImg src="logo.png" />
        </NuxtLink>
        <nav class="header__nav">
          <NuxtLink to="/" class="header__nav-link">Home</NuxtLink>
          <NuxtLink class="header__nav-link">Genres</NuxtLink>
        </nav>
        <div class="header__search">
          <input
            type="text"
            placeholder="Поиск"
            class="header__input"
            v-model="searchQuery"
            @keyup="onKeyup"
            @focus="onFocus"
          />
          <div class="header__search-results">
            <div v-if="error" class="header__search-error error">
              {{ error }}
            </div>
            <ul v-if="data && data.length && showResults" class="header__list">
              <li v-for="movie in data" :key="movie.id" class="header__item">
                <NuxtImg :src="movie.posterUrl" class="header__item-image" />
                <div class="header__item-wrapper">
                  <MovieTop
                    :movie="movie"
                    leftTopClass="header__item-top"
                    rateClass="header__item-rate"
                    rateIconClass="header__rate-icon"
                    yearClass="header__rate-year"
                    genreClass="header__rate-genre"
                    durationClass="header__rate-duration"
                  />
                  <p class="header__item-title">
                    {{ movie.title }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <button class="header__button" @click="execute">Login</button>
      </div>
    </div>
  </header>
</template>

<style src="./Header.less" lang="less" />
