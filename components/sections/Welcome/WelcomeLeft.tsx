import { type JSX } from 'react';

import { LinkButton } from '@/components/ui/LinkButton';

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
    <div className="flex flex-col gap-[48px] max-w-[500px] py-[0px] ml-[7px]">
      <h2 className="flex items-center min-h-[90px] font-normal text-[32px] leading-[130%] tracking-[0%] uppercase text-white">
        {isLoading ? 'Loading...' : `Exclusive welcome offer ${welcomeText}`}
      </h2>
      <LinkButton offerId={offerId} isLoading={isLoading} variant="welcome">
        claim bonus
      </LinkButton>
    </div>
  );
};
