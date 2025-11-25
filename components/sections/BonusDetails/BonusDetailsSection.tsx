'use client';

import { useState, useEffect } from 'react';

import type { JSX } from 'react';

import { OffersTable } from '@/components/sections/BonusDetails/OffersTable/OffersTable';
import { Container } from '@/components/ui/Container';
import { FilterButton } from '@/components/ui/FilterButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useSiteData } from '@/hooks/api';
import { shuffleArray } from '@/shared/helpers/shuffle';

export const BonusDetailsSection = (): JSX.Element => {
  const { data } = useSiteData();
  const offerToShow = shuffleArray(data?.offers ?? []).slice(0, 6);
  const [offers, setOffers] = useState(offerToShow);

  useEffect(() => {
    setOffers(shuffleArray(data?.offers ?? []).slice(0, 6));
  }, [data]);

  const handleRefresh = (): void => {
    setOffers(shuffleArray(data?.offers ?? []).slice(0, 6));
  };

  return (
    <section className="bg-bg-ocean-blue pb-[137px]">
      <Container styles="flex flex-col gap-[48px]">
        <SectionHeading className="mb-[10px]">bonus details</SectionHeading>
        <OffersTable offers={offers} />
        <FilterButton
          className="mt-[-23px] self-center w-[340px]"
          onClick={handleRefresh}
        >
          Refresh
        </FilterButton>
      </Container>
    </section>
  );
};
