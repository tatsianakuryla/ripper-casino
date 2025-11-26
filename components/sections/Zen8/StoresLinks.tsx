'use client';

import Image from 'next/image';
import Link from 'next/link';

import type { JSX } from 'react';

import { useFirstOffer } from '@/hooks/api/useFirstOffer';
import { APP_ROUTES } from '@/shared/constants/app_routes.constants';

export const StoresLinks = (): JSX.Element => {
  const { offerId, isLoading } = useFirstOffer();

  if (isLoading || !offerId) {
    return <div className="flex" />;
  }

  return (
    <div className="flex gap-[24px]">
      <Link
        href={APP_ROUTES.CASINO(offerId)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on Google Play"
        className="relative flex w-[175px] h-[52px] items-center justify-center transition-transform hover:scale-105"
      >
        <Image
          src="/google-play-img.png"
          alt="Get it on Google Play"
          fill
          className="object-contain"
          sizes="175px"
        />
      </Link>

      <Link
        href={APP_ROUTES.CASINO(offerId)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on App Store"
        className="relative flex w-[175px] h-[52px] items-center justify-center transition-transform hover:scale-105"
      >
        <Image
          src="/app-store-img.png"
          alt="Download on the App Store"
          fill
          className="object-contain"
          sizes="175px"
        />
      </Link>
    </div>
  );
};
