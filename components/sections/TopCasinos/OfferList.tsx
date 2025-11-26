import type { JSX } from 'react';

import { type Casino } from '@/api/schemas';
import { OfferCard } from '@/components/sections/TopCasinos/OfferCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { Loader } from '@/components/ui/Loader/Loader';

interface OfferListProperties {
  offers: Casino[];
  isLoading: boolean;
}
export const OfferList = ({
  offers,
  isLoading,
}: OfferListProperties): JSX.Element => {
  const isEmpty = !isLoading && offers.length === 0;

  return (
    <ul
      className={`w-full font-sans min-h-[400px] ${
        isLoading || isEmpty
          ? 'flex items-center justify-center'
          : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-[24px] gap-x-[26.67px]'
      }`}
    >
      {isLoading ? (
        <li key="isLoading" className="flex">
          <Loader size={64}></Loader>
        </li>
      ) : isEmpty ? (
        <li key="empty" className="flex w-full">
          <EmptyState message="No casinos available" />
        </li>
      ) : (
        offers.map((offer) => (
          <li key={offer.id} className="flex justify-center h-full">
            <OfferCard offer={offer} isLoading={isLoading} />
          </li>
        ))
      )}
    </ul>
  );
};
