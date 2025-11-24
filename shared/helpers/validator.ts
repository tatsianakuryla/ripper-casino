import { type z } from 'zod';

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
  public static validate<T>(
    schema: z.ZodSchema<T>,
    value: unknown,
    context?: string,
  ): T {
    const result = schema.safeParse(value);

    if (result.success) {
      return result.data;
    }

    const message = context
      ? `Validation failed for ${context}`
      : 'Validation failed';
    const errors = result.error.issues.map((issue) => issue.message);
    throw new ValidationError(message, errors);
  }
}
