import type { JSX } from 'react';

import { FooterContent } from '@/components/layout/Footer/FooterContent';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-bg-black">
      <Container styles="flex items-start gap-[154px] pt-[14px] pb-[24px]">
        <Logo />
        <FooterContent />
      </Container>
    </footer>
  );
};
