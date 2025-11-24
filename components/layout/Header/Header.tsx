'use client';

import { HeaderLogo } from './HeaderLogo';

import type { JSX } from 'react';

import { HeaderNavigation } from '@/components/layout/Header/HeaderNavigation';
import { Container } from '@/components/ui/Container';
import { useFirstOffer } from '@/hooks/api';

export const Header = (): JSX.Element => {
  const { offerId, isLoading } = useFirstOffer();

  return (
    <header className="bg-[var(--color-bg-black)]">
      <Container styles="items-center gap-[24px] py-[21.5px]">
        <HeaderLogo />
        <HeaderNavigation offerId={offerId} isLoading={isLoading} />
      </Container>
    </header>
  );
};
