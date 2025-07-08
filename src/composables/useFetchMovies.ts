// useFetchMovies.ts
export const useFetchMovies = async (endpoint: string) => {
  const config = useRuntimeConfig();

  try {
    const response = await $fetch(`${config.public.apiBaseURL}${endpoint}`);

    if (isErrorResponse(response)) {
      throw new Error(getErrorMessage(response));
    }

    if (!response) {
      throw new Error('No data received from API');
    }

    if (typeof response === "object" && "name" in response) {
      throw new Error('Invalid response format');
    }

    return response;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};