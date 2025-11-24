import type { JSX } from 'react';

import { AppLink } from '@/components/ui/Link';
import { OfferButton } from '@/components/ui/OfferButton';
import { APP_ROUTES } from '@/shared/constants/app_routes.constants';

interface HeaderNavigationProperties {
  offerId?: number;
  isLoading: boolean;
}

export const HeaderNavigation = ({
  offerId,
  isLoading,
}: HeaderNavigationProperties): JSX.Element => {
  return (
    <nav className="py-[4px]" aria-label="Header Navigation">
      <ul className="flex w-full gap-[24px] justify-between align-center leading-[28px] text-base text-text-main font-display">
        <AppLink href={APP_ROUTES.BONUS} className={'hover:text-text-accent'}>
          Bonus
        </AppLink>
        <AppLink href={APP_ROUTES.APP} className={'hover:text-text-accent'}>
          App
        </AppLink>
        <AppLink href={APP_ROUTES.LOGIN} className={'hover:text-text-accent'}>
          Login
        </AppLink>
        <OfferButton offerId={offerId} isLoading={isLoading} />
      </ul>
    </nav>
  );
};
