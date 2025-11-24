import { type JSX } from 'react';

import { OfferButton } from '@/components/ui/OfferButton';

interface HeroLeftProperties {
  offerId?: number;
  isLoading: boolean;
  welcomeText?: string;
}

export const WelcomeLeft = ({
  offerId,
  isLoading,
  welcomeText = 'Exclusive welcome offer!',
}: HeroLeftProperties): JSX.Element => {
  return (
    <div className="flex flex-col gap-[48px] max-w-[500px] pt-[160px] pb-[150px]">
      <h2 className="flex items-center min-h-[90px] font-normal text-[32px] leading-[130%] tracking-[0%] align-middle uppercase text-white">
        {isLoading ? 'Loading...' : `Exclusive welcome offer ${welcomeText}`}
      </h2>
      <OfferButton offerId={offerId} isLoading={isLoading} variant="hero">
        claim bonus
      </OfferButton>
    </div>
  );
};
