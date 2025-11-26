'use client';

import { Logo } from '../../ui/Logo';

import type { JSX } from 'react';

import { HeaderNavigation } from '@/components/layout/Header/HeaderNavigation';
import { Container } from '@/components/ui/Container';
import { useFirstOffer } from '@/hooks/api';

export const Header = (): JSX.Element => {
  const { offerId, isLoading } = useFirstOffer();

  return (
    <header className="bg-[var(--color-bg-black)]">
      <Container styles="items-center gap-[12px] py-[21.5px]">
        <Logo className="mr-auto" />
        <HeaderNavigation offerId={offerId} isLoading={isLoading} />
      </Container>
    </header>
  );
};
