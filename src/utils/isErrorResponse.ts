// isErrorResponse.ts
const ERROR_NAMES = [
  'PrismaClientValidationError',
  'Error',
  'ValidationError'
] as const;

export const isErrorResponse = (response: unknown): response is { name: string; message?: string } => {
  return response !== null &&
    typeof response === 'object' &&
    'name' in response &&
    (ERROR_NAMES.includes(response.name as any) || 'error' in response);
};