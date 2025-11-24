import { QueryClient } from '@tanstack/react-query';

import { type Game } from '@/api/api.types';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export const queryKeys = {
  website: ['website'] as const,
  games: (type: Game) => ['games', type] as const,
};
