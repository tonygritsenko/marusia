import type { IMovie } from "~/types";

export const useHeaderSearch = () => {
  const searchQuery = ref("");
  const showResults = ref(false);
  const data = ref<IMovie[] | null>(null);
  const error = ref<string | null>(null);

  const fetcher = (): Promise<IMovie[]> =>
    useFetchMovies<IMovie[]>(
      `/movie?title=${encodeURIComponent(searchQuery.value)}`
    );

  const { data: fetchedData, error: fetchError, execute } = useAsyncFetch<IMovie[]>(fetcher);

  const updateShowResults = () => {
    showResults.value = !!(
      data.value &&
      data.value.length &&
      searchQuery.value.trim()
    );
  };

  const onKeyup = async (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      await execute();
      data.value = fetchedData.value;
      error.value = fetchError.value as string | null;
      updateShowResults();
    } else if (searchQuery.value.trim() === "") {
      data.value = null;
      showResults.value = false;
    }
  };

  const onFocus = () => {
    updateShowResults();
  };

  const clearResults = () => {
    showResults.value = false;
  };

  return {
    searchQuery,
    showResults,
    data,
    error,
    onKeyup,
    onFocus,
    clearResults,
    execute,
  };
};