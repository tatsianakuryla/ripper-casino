import type { JSX } from 'react';

import { CowboysCasinoLoginMethods } from '@/components/sections/CowboysCasinoLogin/CowboyLoginCasinoMethods';
import { CowboysCasinoLoginDescription } from '@/components/sections/CowboysCasinoLogin/CowboysCasinoLoginDescription';
import { Container } from '@/components/ui/Container';
import { SubsectionHeading } from '@/components/ui/SubsectionHeading';

export const CowboysCasinoLoginSection = (): JSX.Element => {
  return (
    <section className="bg-bg-ocean-blue pt-[144px] pb-[64px]">
      <Container styles="flex flex-col gap-[34px]">
        <SubsectionHeading>About Cowboys Casino Login</SubsectionHeading>
        <CowboysCasinoLoginDescription />
        <CowboysCasinoLoginMethods />
      </Container>
    </section>
  );
};
