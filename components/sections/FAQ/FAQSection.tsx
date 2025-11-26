import type { JSX } from 'react';

import { FaqList } from '@/components/sections/FAQ/FaqList';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const FAQSection = (): JSX.Element => {
  return (
    <section className="bg-bg-ocean-blue pt-[149px] pb-[142px]">
      <Container styles="flex flex-col gap-[34px]">
        <SectionHeading>FAQ</SectionHeading>
        <FaqList />
      </Container>
    </section>
  );
};
