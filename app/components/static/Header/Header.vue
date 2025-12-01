<script setup lang="ts">
import { useHeaderSearch } from "~/composables/useHeaderSearch";
import { useSearchClickOutside } from "~/utils/searchClickOutside";

const { searchQuery, showResults, data, error, onKeyup, onFocus, clearResults, execute } = useHeaderSearch();

useSearchClickOutside(() => clearResults());
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <NuxtLink class="header__link">
          <NuxtImg src="/images/logo.png" />
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
