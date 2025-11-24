import Image from 'next/image';

import type { JSX } from 'react';

import { AppLink } from '@/components/ui/Link';
import { APP_ROUTES } from '@/shared/constants/app_routes.constants';

export const HeaderLogo = (): JSX.Element => {
  return (
    <AppLink
      href={APP_ROUTES.HOME}
      className="flex items-center mr-auto"
      aria-label="Ripper Casino"
    >
      <Image
        src="/ripper-logo.svg"
        alt="Ripper Casino HeaderLogo"
        width={97}
        height={52.52}
        priority
      />
    </AppLink>
  );
};
