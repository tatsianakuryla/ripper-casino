import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import type { GamesList, GameType } from '@/api/schemas';

import { apiManager } from '@/api/manager';
import { queryKeys } from '@/api/query-client';

export const useGetGames = (type: GameType): UseQueryResult<GamesList> =>
  useQuery({
    queryKey: queryKeys.games(type),
    queryFn: () => apiManager.getGames(type),
  });
