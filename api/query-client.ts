import { QueryClient } from '@tanstack/react-query';

import { type GameType } from '@/api/schemas';

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
  siteData: ['site-data'] as const,
  games: (type: GameType) => ['games', type] as const,
};
