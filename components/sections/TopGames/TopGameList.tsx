import { type JSX } from 'react';

import type { Game } from '@/api/schemas';

import { TopGameCard } from '@/components/sections/TopGames/TopGameCard';
import { Loader } from '@/components/ui/Loader/Loader';

interface TopGameListProperties {
  games: Game[];
  isLoading: boolean;
  offerId?: number;
}

export const TopGameList = ({
  games,
  isLoading,
  offerId,
}: TopGameListProperties): JSX.Element => {
  return (
    <ul
      className={`w-full font-sans min-h-[400px] ${
        isLoading
          ? 'flex items-center justify-center'
          : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-[21px] gap-x-[24px]'
      }`}
    >
      {isLoading ? (
        <li key="isLoading" className="flex">
          <Loader size={64}></Loader>
        </li>
      ) : (
        games.map((game) => (
          <li key={game.id} className="flex justify-center h-full">
            <TopGameCard game={game} offerId={offerId} />
          </li>
        ))
      )}
    </ul>
  );
};
