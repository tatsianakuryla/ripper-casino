'use client';

import { useState, useEffect } from 'react';

import type { JSX } from 'react';

import { type Casino } from '@/api/schemas';
import { OffersTable } from '@/components/sections/BonusDetails/OffersTable/OffersTable';
import { Container } from '@/components/ui/Container';
import { FilterButton } from '@/components/ui/FilterButton';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useSiteData } from '@/hooks/api';
import { BONUS_DETAILS_LIMIT } from '@/shared/constants/main.constants';
import { shuffleArray } from '@/shared/helpers/shuffle';

export const BonusDetailsSection = (): JSX.Element => {
  const { data } = useSiteData();
  const [offers, setOffers] = useState<Casino[]>([]);
  const [tableRenderKey, setTableRenderKey] = useState(0);

  useEffect(() => {
    if (!data?.offers.length) return;

    setOffers(shuffleArray(data.offers).slice(0, BONUS_DETAILS_LIMIT));
  }, [data?.offers]);

  const handleRefresh = (): void => {
    if (!data?.offers.length) return;

    setOffers(shuffleArray(data.offers).slice(0, BONUS_DETAILS_LIMIT));
    setTableRenderKey((previousKey) => previousKey + 1);
  };

  return (
    <section className="bg-bg-ocean-blue pb-[137px]">
      <Container styles="flex flex-col gap-[48px]">
        <SectionHeading className="mb-[10px]">bonus details</SectionHeading>
        <OffersTable key={tableRenderKey} offers={offers} />
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
