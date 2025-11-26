'use client';

import Image from 'next/image';

import type { JSX } from 'react';

import { AppLink } from '@/components/ui/Link';
import { APP_ROUTES } from '@/shared/constants/app_routes.constants';

interface LogoProperties {
  className?: string;
}

export const Logo = ({ className = '' }: LogoProperties): JSX.Element => {
  return (
    <AppLink
      href={APP_ROUTES.HOME}
      className={`flex items-center ${className}`}
      aria-label="Ripper Casino"
    >
      <Image
        src="/ripper-logo.svg"
        alt="Ripper Casino"
        width={97}
        height={52.52}
        priority
      />
    </AppLink>
  );
};
