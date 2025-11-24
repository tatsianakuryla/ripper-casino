import type { JSX } from 'react';

import { AppLink } from '@/components/ui/Link';
import { OfferButton } from '@/components/ui/OfferButton';
import { APP_ROUTES } from '@/shared/constants/app_routes.constants';

interface HeaderNavigationProperties {
  offerId?: number;
  isLoading: boolean;
}

const NAV_ITEMS = [
  { href: APP_ROUTES.BONUS, label: 'Bonus' },
  { href: APP_ROUTES.APP, label: 'App' },
  { href: APP_ROUTES.LOGIN, label: 'Login' },
] as const;

export const HeaderNavigation = ({
  offerId,
  isLoading,
}: HeaderNavigationProperties): JSX.Element => {
  return (
    <nav className="mr-[3px]" aria-label="Header Navigation">
      <ul className="flex w-full justify-between align-center leading-[28px] text-base text-text-main font-display gap-[26px]">
        {NAV_ITEMS.map((item) => (
          <li className={`flex items-center justify-center`} key={item.label}>
            <AppLink href={item.href} className="hover:text-text-accent">
              {item.label}
            </AppLink>
          </li>
        ))}
        <li className={`flex items-center justify-center`} key="offer-button">
          <OfferButton offerId={offerId} isLoading={isLoading} />
        </li>
      </ul>
    </nav>
  );
};
