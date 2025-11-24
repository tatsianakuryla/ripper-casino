import type { JSX } from 'react';

import { AppLink } from '@/components/ui/Link';
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
        <AppLink
          href={offerId ? APP_ROUTES.CASINO(offerId) : APP_ROUTES.HOME}
          disabled={!offerId || isLoading}
          target={offerId ? '_blank' : undefined}
          className={
            'bg-button-primary text-sm text-bg-main py-[12px] px-[66.5px] rounded-[4px] hover:scale-105 transition-transform'
          }
        >
          {isLoading ? 'Loading...' : 'Play Now'}
        </AppLink>
      </ul>
    </nav>
  );
};
