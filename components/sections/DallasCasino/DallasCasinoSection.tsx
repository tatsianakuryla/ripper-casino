import type { JSX } from 'react';

import { DallasCasinoDescription } from '@/components/sections/DallasCasino/DallasCasinoDescription';
import { DallasCasinoImage } from '@/components/sections/DallasCasino/DallasCasinoImage';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const DallasCasinoSection = (): JSX.Element => {
  return (
    <section className="bg-bg-black pt-[74px] pb-[58px]">
      <Container styles="flex flex-col gap-[58px]">
        <SectionHeading>Dallas Cowboys Casino</SectionHeading>
        <div className="flex gap-[47px]">
          <DallasCasinoDescription />
          <DallasCasinoImage />
        </div>
      </Container>
    </section>
  );
};
