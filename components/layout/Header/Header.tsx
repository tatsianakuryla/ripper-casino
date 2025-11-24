'use client';

import { HeaderLogo } from './HeaderLogo';

import type { JSX } from 'react';

import { HeaderNavigation } from '@/components/layout/Header/HeaderNavigation';
import { Container } from '@/components/ui/Container';
import { useSiteData } from '@/hooks/api';

export const Header = (): JSX.Element => {
  const { data, isLoading } = useSiteData();
  const firstOfferId = data?.offers[0]?.id;

  return (
    <header>
      <Container styles="items-center gap-[24px] py-[21.5px] bg-[var(--color-bg-main)]">
        <HeaderLogo />
        <HeaderNavigation offerId={firstOfferId} isLoading={isLoading} />
      </Container>
    </header>
  );
};
