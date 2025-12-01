<script setup lang="ts">
import tvImg from "~/assets/images/tv.webp";

defineProps<{
  loading: boolean;
}>();

const loadingEl = ref<HTMLElement | null>(null);
const { error } = useImageLoader([tvImg], loadingEl);

const bgStyle = computed(() => ({
  backgroundImage: `url(${tvImg})`,
}));
</script>

<template>
  <div ref="loadingEl" class="loading">
    <div class="loading__wrapper" :style="bgStyle">
      <span class="loading__text">Loading . . .</span>
    </div>
    <div class="loading__error" v-if="error" role="alert">{{ error }}</div>
  </div>
</template>

<style scoped lang="less">
.loading {
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &__wrapper {
    position: relative;
    width: 329px;
    height: 212px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  &__text {
    position: absolute;
    top: 73px;
    left: 128px;
    font-size: 28px;
    font-weight: bold;
    color: transparent;
    background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0.5) 100%);
    background-size: 10% 100%;
    background-position: 0% 0%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: none;
  }

  &.onload-img {
    &__text {
      animation: appearance 10s ease, loading-gradient 3s linear infinite;
    }
  }

  &__error {
    margin-top: 12px;
    color: #ff5252;
    font-size: 14px;
    text-align: center;
    max-width: 90%;
    word-break: break-word;
  }
}

@keyframes loading-gradient {
  0% {
    background-position: 0% 0%;
  }
  25% {
    background-position: 25% 0%;
  }
  50% {
    background-position: 50% 0%;
  }
  75% {
    background-position: 75% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}

@keyframes appearance {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}
</style>
