import { ValidationError } from '@/shared/validator/validator';

export const isValidationError = (error: unknown): error is ValidationError => {
  return error instanceof ValidationError;
};

export const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};
