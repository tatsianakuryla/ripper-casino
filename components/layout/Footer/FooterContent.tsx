'use client';

import type { JSX } from 'react';

import { CertificationOrganizations } from '@/components/layout/Footer/CertificationOrganizations';
import { Copyright } from '@/components/layout/Footer/Copyright';
import { Organizations } from '@/components/layout/Footer/Organizations';
import { PaymentMethods } from '@/components/layout/Footer/PaymentMethods';

export const FooterContent = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-[24px]">
      <PaymentMethods />
      <Organizations />
      <CertificationOrganizations />
      <Copyright />
    </div>
  );
};
