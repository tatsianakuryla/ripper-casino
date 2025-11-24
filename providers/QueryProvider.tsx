'use client';

import { QueryClientProvider } from '@tanstack/react-query';

import type { ReactNode, JSX } from 'react';

import { queryClient } from '@/api/query_client';

interface QueryProviderProps {
  children: ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
