// getErrorMessage.ts
export const getErrorMessage = (error: unknown): string => {
  if (!error || typeof error !== 'object') {
    return 'Failed to fetch data.';
  }

  const errorObj = error as Record<string, unknown>;

  // Handle HTTP errors
  if ('status' in errorObj) {
    if (errorObj.status === 404) return 'Resource not found';
    if ('statusText' in errorObj) return `${errorObj.status}: ${errorObj.statusText}`;
  }

  // Handle Prisma errors
  if ('name' in errorObj && errorObj.name === 'PrismaClientValidationError') {
    return 'Resource not found';
  }

  // Handle general errors
  if ('message' in errorObj && typeof errorObj.message === 'string') {
    return errorObj.message;
  }

  if ('name' in errorObj && typeof errorObj.name === 'string') {
    return errorObj.name;
  }

  return 'Failed to fetch data.';
};