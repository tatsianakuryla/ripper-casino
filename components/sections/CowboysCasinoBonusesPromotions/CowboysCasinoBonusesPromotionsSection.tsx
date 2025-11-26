import type { JSX } from 'react';

import { CowboysCasinoBonusesDescription } from '@/components/sections/CowboysCasinoBonusesPromotions/CowboysCasinoBonusesDescription';
import { Container } from '@/components/ui/Container';
import { DescriptionBlock } from '@/components/ui/DescriptionBlock';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const CowboysCasinoBonusesPromotionsSection = (): JSX.Element => {
  return (
    <section className="bg-bg-black pt-[74px] pb-[96px]">
      <Container styles="flex flex-col gap-[52px]">
        <SectionHeading className="mb-[26px]">
          Cowboys Casino Bonuses and Promotions
        </SectionHeading>
        <DescriptionBlock>
          <p>
            Cowboys Casino in Calgary is known for enriching the gaming
            experience of its visitors through an array of enticing bonuses and
            promotions. These offers are designed to reward regular patrons and
            attract new ones, making each visit potentially more rewarding.
            Whether it's through additional play credits, cash prizes, or
            special event access, Cowboys Casino ensures that both new and
            returning customers have plenty of reasons to play
          </p>
        </DescriptionBlock>
        <CowboysCasinoBonusesDescription />
      </Container>
    </section>
  );
};
