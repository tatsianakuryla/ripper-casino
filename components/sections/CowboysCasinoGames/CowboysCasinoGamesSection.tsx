import type { JSX } from 'react';

import { CowboysCasinoGamesDescription } from '@/components/sections/CowboysCasinoGames/CowboysCasinoGamesDescription';
import { Container } from '@/components/ui/Container';
import { DescriptionBlock } from '@/components/ui/DescriptionBlock';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const CowboysCasinoGamesSection = (): JSX.Element => {
  return (
    <section className="bg-bg-black pt-[74px] pb-[64px]">
      <Container styles="flex flex-col gap-[52px]">
        <SectionHeading className="mb-[30px]">
          Games Available to Play at Cowboys Casino
        </SectionHeading>
        <DescriptionBlock>
          <p>
            Cowboys Casino in Calgary is renowned for its wide array of gaming
            opportunities, catering to all types of players, from novices to
            seasoned gamblers. With its expansive gaming floor, visitors can
            enjoy a variety of games in a lively and exciting environment.
            Here’s a breakdown of the main gaming options available at Cowboys
            Casino:
          </p>
        </DescriptionBlock>
        <CowboysCasinoGamesDescription />
      </Container>
    </section>
  );
};
