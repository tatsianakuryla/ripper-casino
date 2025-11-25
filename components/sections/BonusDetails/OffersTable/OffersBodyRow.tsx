import Image from 'next/image';
import { useState } from 'react';

import type { Casino } from '@/api/schemas';
import type { JSX } from 'react';

import { CASINO_LOGOS_ENDPOINT } from '@/api/endpoints';
import { MoreInfoButton } from '@/components/sections/BonusDetails/MoreInfoButton';
import { EmptyRow } from '@/components/sections/BonusDetails/OffersTable/EmptyRow';
import { MoreInfoTable } from '@/components/sections/BonusDetails/OffersTable/MoreInfoTable';
import { OfferButton } from '@/components/ui/OfferButton';
import { TableBorder } from '@/components/ui/TableBorder';

interface OffersBodyRowProperties {
  offer: Casino;
}

export const OffersBodyRow = ({
  offer,
}: OffersBodyRowProperties): JSX.Element => {
  const tdBasicStyle = 'pr-[19px] pl-[20px] py-[16px] relative font-medium';
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = (): void => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <tr className="bg-bg-dark-blue font-sans text-[20px] leading-[100%] tracking-[0] text-center">
        <td className="pl-[16px] pr-[19px] py-[16px] relative rounded-l-[8px]">
          <figure className="w-full max-w-[170px] h-[53px] flex items-center justify-center mx-auto">
            <Image
              src={CASINO_LOGOS_ENDPOINT(offer.logo)}
              alt={offer.name}
              width={170}
              height={53}
              className="object-contain max-w-full max-h-full"
            />
          </figure>
          <TableBorder />
        </td>
        <td className={tdBasicStyle}>
          {offer.bonuses.welcome_bonus}
          <TableBorder />
        </td>
        <td className={tdBasicStyle}>
          {offer.bonuses.rate}
          <TableBorder />
        </td>
        <td className={tdBasicStyle}>
          {`${offer.bonuses.free_spins.replace(/\D/g, '')} FS`}
          <TableBorder />
        </td>
        <td className="pr-[19px] pl-[20px] py-[16px] relative">
          <MoreInfoButton toggleAccordion={toggleAccordion} />
          <TableBorder />
        </td>
        <td className="pr-[16px] pl-[20px] py-[16px] rounded-r-[8px]">
          <div className="flex items-center justify-center">
            <OfferButton offerId={offer.id} isLoading={false} variant="casino">
              GET THE BONUS
            </OfferButton>
          </div>
        </td>
      </tr>
      {isExpanded && (
        <tr className="bg-bg-dark-blue">
          <td colSpan={6}>
            <MoreInfoTable offer={offer} />
          </td>
        </tr>
      )}
      <EmptyRow />
    </>
  );
};
