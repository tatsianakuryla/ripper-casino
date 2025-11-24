import type { JSX } from 'react';

import { AppLink } from '@/components/ui/Link';
import { APP_ROUTES } from '@/shared/constants/app_routes.constants';

interface OfferButtonProps {
  offerId?: number;
  isLoading: boolean;
  variant?: 'primary' | 'welcome';
  children?: string;
}

export const OfferButton = ({
  offerId,
  isLoading,
  variant = 'primary',
  children = 'Play Now',
}: OfferButtonProps): JSX.Element => {
  const variants = {
    primary:
      'bg-button-primary text-sm text-bg-black py-[12px] px-[66px] rounded-[4px] hover:scale-105 transition-transform max-w-[210px]',
    welcome:
      'bg-button-primary text-[28px] tracking-[0] text-bg-black py-[20px] px-[66px] rounded-[4px] hover:scale-105 transition-transform uppercase max-w-[340px]',
  };

  return (
    <AppLink
      href={offerId ? APP_ROUTES.CASINO(offerId) : APP_ROUTES.HOME}
      disabled={!offerId || isLoading}
      target={offerId ? '_blank' : undefined}
      className={variants[variant]}
    >
      {children}
    </AppLink>
  );
};
