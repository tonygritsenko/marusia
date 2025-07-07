export const formatGenres = (genres: string[] | string): string => {
  if (Array.isArray(genres)) {
    return genres.join(', ');
  }
  return genres || '';
};