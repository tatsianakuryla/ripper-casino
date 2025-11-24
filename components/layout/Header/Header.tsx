import { HeaderLogo } from './HeaderLogo';

import type { JSX } from 'react';

import { HeaderNavigation } from '@/components/layout/Header/HeaderNavigation';
import { Container } from '@/components/ui/Container';

export const Header = (): JSX.Element => {
  return (
    <header>
      <Container styles="items-center gap-[24px] py-[24px]">
        <HeaderLogo />
        <HeaderNavigation />
      </Container>
    </header>
  );
};
