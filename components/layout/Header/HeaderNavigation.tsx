import type { JSX } from 'react';

import { AppLink } from '@/components/ui/Link';
import { APP_ROUTES } from '@/shared/constants/app_routes.constants';

export const HeaderNavigation = (): JSX.Element => {
  return (
    <nav
      className="py-[4px] pr-px-[6px] pl-px-[4px]"
      aria-label="Header Navigation"
    >
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
          //TODO
          href={APP_ROUTES.CASINO(1)}
          className={
            'bg-button-primary text-sm text-bg-main py-[12px] px-[66px] rounded-[4px] hover:scale-105'
          }
          target="_blank"
        >
          Play Now
        </AppLink>
      </ul>
    </nav>
  );
};
