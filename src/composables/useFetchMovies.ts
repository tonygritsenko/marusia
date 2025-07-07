export const useFetchMovies = async (endpoint: string) => {
  const config = useRuntimeConfig();

  const response = await $fetch(`${config.public.apiBaseURL}${endpoint}`, {
    onResponse({ response }) {
      if (response.ok) return response._data;
    },
  });

  if (isErrorResponse(response)) throw new Error(getErrorMessage(response));
  if (!response) throw new Error('No data received from API');

  return response;
};