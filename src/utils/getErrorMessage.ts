export const getErrorMessage = (error: unknown): string => {
  if (error && typeof error === 'object') {
    if ('status' in error && error.status === 404) return 'Resource not found';
    if ('status' in error && 'statusText' in error) return `${error.status}: ${error.statusText}`;
    if ('name' in error && error.name === 'PrismaClientValidationError') return 'Resource not found';
    if ('message' in error && typeof error.message === 'string') return error.message;
    if ('name' in error && typeof error.name === 'string') return error.name;
  }
  return 'Failed to fetch data.';
};