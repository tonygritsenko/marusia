<script setup lang="ts">
import type { IMovie } from '~/types';

defineProps<{
  movie: IMovie;
  leftTopClass?: string;
  rateClass?: string;
  rateIconClass?: string;
  yearClass?: string;
  genreClass?: string;
  durationClass?: string;
}>();
</script>

<template>
  <div :class="leftTopClass">
    <div :class="rateClass">
      <Icon name="Star" :class="rateIconClass" />
      {{ movie.tmdbRating }}
    </div>
    <span :class="yearClass">{{ movie.releaseYear }}</span>
    <span :class="genreClass">
      {{ formatGenres(movie.genres) }}
    </span>
    <span :class="durationClass">
      {{ formatRuntime(movie.runtime) }}
    </span>
  </div>
</template>
