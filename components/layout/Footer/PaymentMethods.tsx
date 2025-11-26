'use client';

import Image from 'next/image';

import type { JSX } from 'react';

export const PAYMENT_METHODS = [
  {
    id: 'mastercard',
    src: '/payment-methods/mc.svg',
    alt: 'Mastercard logo',
    width: 54,
    height: 32,
  },
  {
    id: 'visa',
    src: '/payment-methods/visa.svg',
    alt: 'Visa logo',
    width: 96,
    height: 32,
  },
  {
    id: 'neteller',
    src: '/payment-methods/nt.svg',
    alt: 'Neteller logo',
    width: 180,
    height: 32,
  },
  {
    id: 'skrill',
    src: '/payment-methods/scrl.svg',
    alt: 'Skrill logo',
    width: 96,
    height: 32,
  },
  {
    id: 'bitcoin',
    src: '/payment-methods/btc.svg',
    alt: 'Bitcoin logo',
    width: 32,
    height: 32,
  },
  {
    id: 'litecoin',
    src: '/payment-methods/ltc.svg',
    alt: 'Litecoin logo',
    width: 32,
    height: 32,
  },
  {
    id: 'ethereum',
    src: '/payment-methods/ethr.svg',
    alt: 'Ethereum logo',
    width: 32,
    height: 32,
  },
] as const;

export const PaymentMethods = (): JSX.Element => {
  return (
    <ul className="flex items-center gap-[16px]">
      {PAYMENT_METHODS.map((method) => (
        <li key={method.id}>
          <Image
            src={method.src}
            alt={method.alt}
            width={method.width}
            height={method.height}
            className="grayscale opacity-90"
          />
        </li>
      ))}
    </ul>
  );
};
