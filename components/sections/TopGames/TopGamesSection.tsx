'use client';

import { useEffect, useState } from 'react';

import type { Game } from '@/api/schemas';
import type { JSX } from 'react';

import { TopGameList } from '@/components/sections/TopGames/TopGameList';
import { Container } from '@/components/ui/Container';
import { LinkButton } from '@/components/ui/LinkButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useAllGames, useFirstOffer } from '@/hooks/api';
import { TOP_GAMES_LIMIT } from '@/shared/constants/main.constants';
import { shuffleArray } from '@/shared/helpers/shuffle';

export const TopGamesSection = (): JSX.Element => {
  const { offerId } = useFirstOffer();
  const { data, isLoading } = useAllGames();
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    if (!data.length) return;
    setGames(shuffleArray(data).slice(0, TOP_GAMES_LIMIT));
  }, [data]);

  return (
    <section className="bg-bg-ocean-blue pt-[150px] pb-[137px]">
      <Container styles="flex flex-col gap-[48px]">
        <SectionHeading className="mb-[6px]">Top games</SectionHeading>
        <TopGameList games={games} isLoading={isLoading} offerId={offerId} />
        <div className="flex justify-center">
          <LinkButton className="w-[340px]" offerId={offerId} variant="welcome">
            all games
          </LinkButton>
        </div>
      </Container>
    </section>
  );
};
