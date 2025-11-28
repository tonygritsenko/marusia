<script setup lang="ts">
defineProps<{
  loading: boolean;
}>();

class PreloadImage {
  constructor(settings: {
    container: HTMLElement | null;
    imageUrlList: string[];
    loadClass: string;
  }) {
    this._container = settings.container;
    this._imgUrlList = settings.imageUrlList;
    this._loadClass = settings.loadClass;
  }

  _container: HTMLElement | null = null;
  _imgUrlList: string[] = [];
  _loadClass: string | null = null;

  init() {
    return Promise.all(this._getImageRequestList())
      .then(() => {
        if (this._container && this._loadClass) {
          this._container.classList.add(this._loadClass);
        }
        return "ok";
      })
      .catch((err) => {
        throw err;
      });
  }

  _getImageRequestList() {
    const data: Promise<string>[] = [];

    this._imgUrlList.forEach((url) => {
      const fetchImg = new Promise<string>((resolve, reject) => {
        const img = document.createElement("img");

        img.src = url;
        img.onload = () => {
          resolve("ok");
        };
        img.onerror = (err) => {
          reject(err);
        };
      });

      data.push(fetchImg);
    });

    return data;
  }
}

const imageUrlList = ["tv.webp"];

const loadingEl = ref<HTMLElement | null>(null);

onMounted(() => {
  const preloadImage = new PreloadImage({
    container: loadingEl.value,
    imageUrlList,
    loadClass: "onload-img",
  });

  preloadImage.init();
});
</script>

<template>
  <div ref="loadingEl" class="loading">
    <div class="loading__wrapper">
      <span class="loading__text">Loading . . .</span>
    </div>
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
    width: 729px;
    height: 469px;
    background-image: url("~/public/images/tv.webp");
    background-size: contain;
  }

  &__text {
    position: absolute;
    top: 173px;
    left: 371px;
    font-size: 32px;
    font-weight: bold;
    color: transparent;
    background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0.5) 100%);
    background-size: 10% 100%;
    background-position: 0% 0%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    /* по умолчанию анимация не запущена */
    animation: none;
  }

  /* включаем анимацию только когда изображение загружено и класc onload-img добавлен */
  &.onload-img {
    &__text {
      animation: appearance 10s ease, loading-gradient 3s linear infinite;
    }
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
