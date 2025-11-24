'use client';

import type { JSX } from 'react';

import { RightImage } from '@/components/sections/Welcome/RightImage';
import { WelcomeLeft } from '@/components/sections/Welcome/WelcomeLeft';
import { Container } from '@/components/ui/Container';
import { useFirstOffer } from '@/hooks/api/useFirstOffer';

export const WelcomeSection = (): JSX.Element => {
  const { offerId, isLoading, welcomeText } = useFirstOffer();
  return (
    <section className="font-display">
      <Container styles="bg-[var(--color-bg-section)]">
        <div className="flex w-full gap-[22px] items-center justify-between 2xl:justify-center">
          <WelcomeLeft
            offerId={offerId}
            isLoading={isLoading}
            welcomeText={welcomeText}
          />
          <RightImage />
        </div>
      </Container>
    </section>
  );
};
