import { type z } from 'zod';

import { handleError } from '@/shared/helpers/handle-error';

export class ValidationError extends Error {
  constructor(
    message: string,
    public details: string[] = [],
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

export class Validator {
  public static async validate<T>(
    schema: z.ZodSchema<T>,
    value: unknown,
    context?: string,
  ): Promise<T> {
    const result = schema.safeParse(value);

    if (result.success) {
      return result.data;
    }

    const message = context
      ? `Validation failed for ${context}`
      : 'Validation failed';
    const errors = result.error.issues.map((issue) => issue.message);
    return await handleError(new ValidationError(message, errors));
  }
}
