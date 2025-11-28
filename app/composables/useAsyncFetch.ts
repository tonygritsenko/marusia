// // useAsyncFetch.ts
export function useAsyncFetch<T>(
  fetcher: () => Promise<T>,
  onSuccess?: (data: T) => void
) {
  const loading = ref(true);
  const error = ref<string | null>(null);
  const data = ref<T | null>(null);

  const execute = async () => {
    loading.value = true;
    error.value = null;

    try {
      const result = await fetcher();
      data.value = result;
      onSuccess?.(result);
    } catch (e) {
      console.error('Fetch error:', e);
      error.value = getErrorMessage(e);
      data.value = null;
    } finally {
      loading.value = false;
    }
  };

  return { data, loading, error, execute };
}
