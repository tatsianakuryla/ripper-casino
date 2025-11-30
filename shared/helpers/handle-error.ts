import { isAxiosError } from 'axios';

import { Toaster } from '@/shared/toaster/toaster';
import { isError, isValidationError } from '@/shared/typeguards/typeguards';

function createError(message: string, statusCode?: number): Error {
  const error = new Error(message);
  if (statusCode !== undefined) {
    (error as Error & { statusCode: number }).statusCode = statusCode;
  }
  return error;
}

export function handleError(error: unknown): Promise<never> {
  if (isValidationError(error)) {
    Toaster.error('Validation Error', error.details);
    return Promise.reject(createError(error.message, 422));
  }

  if (isAxiosError(error)) {
    const status = error.response?.status;

    const statusMessages: Record<number, string> = {
      400: 'Invalid request',
      401: 'Unauthorized. Please login',
      403: 'Access forbidden',
      404: 'Resource not found',
      500: 'Server error. Please try again later',
      503: 'Service unavailable',
    };

    if (status && statusMessages[status]) {
      Toaster.error(statusMessages[status]);
      return Promise.reject(createError(statusMessages[status], status));
    }

    if (!error.response) {
      Toaster.error('Network error. Check your connection');
      return Promise.reject(
        createError('Network error. Check your connection'),
      );
    }

    const message = `Request failed with status ${status}`;
    Toaster.error(message);
    return Promise.reject(createError(message, status));
  }

  const message = isError(error) ? error.message : 'Unknown error occurred';
  Toaster.error(message);
  return Promise.reject(createError(message));
}
