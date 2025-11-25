import { useMemo } from 'react';

import type { Game } from '@/api/schemas';

import { useGetGames } from '@/hooks/api/useGetGames';

interface UseAllGamesResult {
  data: Game[];
  isLoading: boolean;
}

export const useAllGames = (): UseAllGamesResult => {
  const gamblingGames = useGetGames('gambling');
  const bettingGames = useGetGames('betting');

  const isLoading = gamblingGames.isLoading || bettingGames.isLoading;

  const data = useMemo(() => {
    const gambling = gamblingGames.data ?? [];
    const betting = bettingGames.data ?? [];
    return [...gambling, ...betting];
  }, [gamblingGames.data, bettingGames.data]);

  return { data, isLoading };
};
