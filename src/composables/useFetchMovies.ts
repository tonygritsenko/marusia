export const useFetchMovies = async (endpoint: string) => {
  const config = useRuntimeConfig();
  return await $fetch(
    `${config.public.apiBaseURL}${endpoint}`,
    {
      onResponse({ response }) {
        if (response.ok) {
          return response._data;
        }
      },
    }
  );
};
