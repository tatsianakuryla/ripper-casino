import Image from 'next/image';
import Link from 'next/link';

import type { Game } from '@/api/schemas';
import type { JSX } from 'react';

import { GAME_IMAGES_ENDPOINT } from '@/api/endpoints';
import { TopGameCardHover } from '@/components/sections/TopGames/TopGameCardHover';
import { APP_ROUTES } from '@/shared/constants/app_routes.constants';

interface TopGameCardProperties {
  game: Game;
  offerId?: number;
}

export const TopGameCard = ({
  game,
  offerId,
}: TopGameCardProperties): JSX.Element => {
  return (
    <Link
      href={offerId ? APP_ROUTES.CASINO(offerId) : APP_ROUTES.HOME}
      target={offerId ? '_blank' : undefined}
      className="block group relative"
    >
      <figure className="rounded-[8px] overflow-hidden border-2 border-transparent group-hover:border-[#8b5cf6] transition-all">
        <Image
          src={GAME_IMAGES_ENDPOINT(game.image)}
          alt={game.name}
          width={264}
          height={142}
          className="object-cover"
        />
        <TopGameCardHover game={game} />
      </figure>
    </Link>
  );
};
