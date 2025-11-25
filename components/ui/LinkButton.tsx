import type { JSX } from 'react';

import { AppLink } from '@/components/ui/Link';
import { APP_ROUTES } from '@/shared/constants/app_routes.constants';

interface OfferButtonProps {
  offerId?: number;
  isLoading: boolean;
  variant?: 'primary' | 'welcome' | 'casino';
  className?: string;
  children?: string;
}

export const LinkButton = ({
  offerId,
  isLoading,
  variant = 'primary',
  className,
  children = 'Play Now',
}: OfferButtonProps): JSX.Element => {
  const variants = {
    primary:
      'text-center align-middle bg-button-primary text-sm text-bg-black py-[12px] px-[66px] rounded-[4px] hover:scale-105 transition-transform max-w-[210px] font-display',
    welcome:
      'text-center align-middle bg-button-primary text-[28px] tracking-[0] text-bg-black py-[20px] px-[66px] rounded-[4px] hover:scale-105 transition-transform uppercase max-w-[340px] font-display',
    casino:
      'text-center align-middle bg-[var(--color-button-secondary)] text-white text-[20px] font-normal leading-[100%] tracking-[0%] py-[16px] px-[32px] rounded-[6px] hover:scale-105 transition-transform uppercase max-w-[218px] font-display',
  };

  return (
    <AppLink
      href={offerId ? APP_ROUTES.CASINO(offerId) : APP_ROUTES.HOME}
      disabled={!offerId || isLoading}
      target={offerId ? '_blank' : undefined}
      className={`${variants[variant]} ${className ?? ''}`}
    >
      {children}
    </AppLink>
  );
};
