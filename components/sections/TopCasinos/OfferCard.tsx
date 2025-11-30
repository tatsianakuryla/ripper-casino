import Image from 'next/image';

import type { Casino } from '@/api/schemas';
import type { JSX } from 'react';

import { CASINO_LOGOS_ENDPOINT } from '@/api/endpoints';
import { LinkButton } from '@/components/ui/LinkButton';

interface OfferCardProperties {
  offer: Casino;
  isLoading?: boolean;
}

export const OfferCard = ({
  offer,
  isLoading = false,
}: OfferCardProperties): JSX.Element => {
  return (
    <article className="flex flex-col items-center text-center gap-[16px] py-[32px] px-[29.5px] bg-bg-dark-blue rounded-[8px] w-full max-w-[260px] min-w-[234px] h-full min-h-[320px] text-white">
      <figure className="w-[190px] h-[76px] flex items-center justify-center">
        <Image
          src={CASINO_LOGOS_ENDPOINT(offer.logo)}
          alt={`${offer.bonuses.welcome_bonus} in ${offer.name}`}
          width={190}
          height={76}
          className="object-cover max-w-full max-h-full"
        />
      </figure>
      <h3 className="font-medium text-[20px] leading-[100%]">{offer.name}</h3>
      <p className="text-text-accent font-medium text-[24px] leading-[100%]">
        Welcome Bonus
      </p>
      <p className="mb-auto font-medium text-[20px] leading-[100%] text-center">
        {offer.bonuses.welcome_bonus}
      </p>
      <LinkButton offerId={offer.id} variant="casino" isLoading={isLoading}>
        Claim bonus
      </LinkButton>
    </article>
  );
};
