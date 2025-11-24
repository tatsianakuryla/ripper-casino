import type { JSX } from 'react';

import { Container } from '@/components/ui/Container';

export const HeroSection = (): JSX.Element => {
  return (
    <section className="bg-[var(--color-bg-ocean-blue)] pb-[70px]">
      <Container styles="justify-center items-center py-[64px]">
        <h1 className="bg-[var(--color-bg-dark-blue)] px-[33px] py-[38.5px] font-normal text-[28px] leading-[100%] text-center align-middle uppercase rounded-lg tracking-normal w-full">
          Cowboys Online – Casino & Sports Betting in One Place
        </h1>
      </Container>
    </section>
  );
};
