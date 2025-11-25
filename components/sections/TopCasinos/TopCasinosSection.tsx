'use client';

import { type JSX, useState } from 'react';

import { OfferList } from '@/components/sections/TopCasinos/OfferList';
import { Container } from '@/components/ui/Container';
import { FilterButton } from '@/components/ui/FilterButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useSiteData } from '@/hooks/api';

export const TopCasinosSection = (): JSX.Element => {
  const { data, isLoading } = useSiteData();
  const countryName = data?.website.country_name ?? '';
  const offers = data?.offers ?? [];
  const [isExpanded, setIsExpanded] = useState(false);
  const offersToShow = offers.slice(0, isExpanded ? offers.length : 8);
  const handleClick = (): void => {
    setIsExpanded(!isExpanded);
  };
  return (
    <section className="bg-[var(--color-bg-ocean-blue)] mt-[-1px] pb-[140px]">
      <Container styles="gap-[52px] flex-col">
        <SectionHeading>{`Top Casinos ${countryName}`}</SectionHeading>
        <OfferList offers={offersToShow} isLoading={isLoading} />
        <FilterButton
          className="self-center"
          onClick={handleClick}
          isHidden={isExpanded}
        >
          ALL CASINO
        </FilterButton>
      </Container>
    </section>
  );
};
