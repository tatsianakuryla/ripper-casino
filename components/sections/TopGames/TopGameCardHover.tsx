import Image from 'next/image';

import type { Game } from '@/api/schemas';
import type { JSX } from 'react';

interface TopGameCardHoverProperties {
  game: Game;
}

export const TopGameCardHover = ({
  game,
}: TopGameCardHoverProperties): JSX.Element => {
  return (
    <div className="absolute inset-0 bg-bg-dark-blue/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-[16px] py-[28px] px-[20px]">
      <h3 className="text-text-accent font-sans font-medium text-[32px] leading-[100%] tracking-[0] text-center align-middle">
        {game.name}
      </h3>
      <div className="flex items-center gap-[2px] text-text-accent font-sans text-[24px] leading-[100%] tracking-[0] font-medium">
        <Image src="/play-now.svg" alt="Play now" width={32} height={32} />
        Play Now
      </div>
    </div>
  );
};
