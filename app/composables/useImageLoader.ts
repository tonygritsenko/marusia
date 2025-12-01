export function useImageLoader(imageUrls: string[], containerRef: any) {
  const error = ref<string | null>(null);

  const loadImages = async () => {
    try {
      await preloadImage(imageUrls);
      addLoadClass(containerRef.value);
    } catch (e) {
      error.value = e instanceof Error ? e.message : String(e);
      console.error(e);
    }
  };

  onMounted(() => {
    loadImages();
  });

  return { error };
}
