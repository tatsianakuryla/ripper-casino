import type { JSX } from 'react';

import { CowboyCasinoProsOrCons } from '@/components/sections/CowboysCasinoAdvantages/CowboyCasinoProsOrCons';
import { BodyText } from '@/components/ui/BodyText';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const ADVANTAGES = [
  'Diverse gaming options',
  'Frequent promotions',
  'Multiple dining venues',
  'Live entertainment and events',
  'Central location',
];

export const DISADVANTAGES = [
  'Potentially crowded',
  'Limited parking',
  'Noise level can be high',
  'Occasional wait times',
];

export const CowboysCasinoAdvantagesSection = (): JSX.Element => {
  return (
    <section className="bg-bg-black pt-[74px] pb-[64px]">
      <Container styles="flex flex-col gap-[54px]">
        <SectionHeading>Cowboys Casino Advantages</SectionHeading>
        <BodyText>
          Cowboys Casino, strategically situated in the heart of Calgary, is a
          premier gaming and entertainment destination that offers a plethora of
          benefits to its visitors. Known for its vibrant atmosphere and
          exceptional service, the casino stands out as a favorite among locals
          and tourists alike. Whether you're there for the games or the live
          entertainment, Cowboys Casino promises a memorable experience with its
          well-rounded offerings.
        </BodyText>
        <div className="flex gap-[36px]">
          <CowboyCasinoProsOrCons list={ADVANTAGES} title="ADVANTAGES" />
          <CowboyCasinoProsOrCons list={DISADVANTAGES} title="DISADVANTAGES" />
        </div>
      </Container>
    </section>
  );
};
