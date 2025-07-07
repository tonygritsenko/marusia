export const isErrorResponse = (response: unknown): response is { name: string; message?: string } => {
  return response !== null &&
    typeof response === 'object' &&
    'name' in response &&
    (response.name === 'PrismaClientValidationError' ||
      response.name === 'Error' ||
      response.name === 'ValidationError' ||
      'error' in response);
};