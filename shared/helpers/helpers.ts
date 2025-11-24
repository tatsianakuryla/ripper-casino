export function handleApiError(error: unknown): Promise<Error> {
  return Promise.reject(
    error instanceof Error ? error : new Error(String(error)),
  );
}
