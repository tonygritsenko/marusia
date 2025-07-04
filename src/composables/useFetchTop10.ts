export const useFetchTop10 = async () => {
  const config = useRuntimeConfig();

  return await $fetch(
    `${config.public.apiBaseURL}/movie/top10`, {
      onResponse({ response }) {
        if (response.ok) {
          return response._data;
        }
      },
    },
  );
};
