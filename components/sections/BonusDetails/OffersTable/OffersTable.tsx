import type { Casino } from '@/api/schemas';
import type { JSX } from 'react';

import { EmptyRow } from '@/components/sections/BonusDetails/OffersTable/EmptyRow';
import { OffersBodyRow } from '@/components/sections/BonusDetails/OffersTable/OffersBodyRow';
import { OffersHeadRow } from '@/components/sections/BonusDetails/OffersTable/OffersHeadRow';

interface OffersTableProperties {
  offers: Casino[];
}

export const OffersTable = ({ offers }: OffersTableProperties): JSX.Element => {
  return (
    <table className="w-full text-sm text-white border-collapse">
      <colgroup>
        <col className="w-[18.4%]" />
        <col className="w-[21.4%]" />
        <col className="w-[12.5%]" />
        <col className="w-[12.5%]" />
        <col className="w-[12.5%]" />
        <col className="w-[22.7%]" />
      </colgroup>

      <thead className="bg-bg-black">
        <OffersHeadRow />
      </thead>

      <tbody>
        <EmptyRow />
        {offers.map((offer) => (
          <OffersBodyRow key={offer.id} offer={offer} />
        ))}
      </tbody>
    </table>
  );
};
