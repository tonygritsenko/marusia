<script setup lang="ts">
defineProps<{
  loading: boolean;
}>();
</script>

<template>
  <div class="container container--loading">
    <span class="loading">Loading . . .</span>
  </div>
</template>

<style scoped lang="less">
.container--loading {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.loading {
  font-size: 32px;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0.5) 100%);
  background-size: 10% 100%;
  background-position: 0% 0%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: loading-gradient 3s linear infinite;
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
  75% {
    background-position: 75% 0%;
  }
  50% {
    background-position: 50% 0%;
  }
  25% {
    background-position: 25% 0%;
  }
  0% {
    background-position: 0% 0%;
  }
}
</style>
