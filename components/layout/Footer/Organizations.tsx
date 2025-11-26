'use client';

import Image from 'next/image';

import type { JSX } from 'react';

export const RESPONSIBLE_GAMBLING_ORGANIZATIONS = [
  {
    id: 'gpwa',
    src: '/organizations/gpwa.svg',
    alt: 'GPWA - Gambling Portal Webmasters Association logo',
    width: 90,
    height: 32,
  },
  {
    id: 'gambleaware',
    src: '/organizations/gamble-aware.svg',
    alt: 'GambleAware responsible gambling organisation logo',
    width: 128,
    height: 32,
  },
  {
    id: 'gamcare',
    src: '/organizations/gam-care.svg',
    alt: 'GamCare gambling support service logo',
    width: 116,
    height: 32,
  },
  {
    id: 'gambling-therapy',
    src: '/organizations/gamb-therapy.svg',
    alt: 'Gambling Therapy online support service logo',
    width: 78,
    height: 32,
  },
  {
    id: 'gamban',
    src: '/organizations/gamban.svg',
    alt: 'Gamban gambling blocking software logo',
    width: 108,
    height: 32,
  },
] as const;

export const Organizations = (): JSX.Element => {
  return (
    <ul
      className="flex items-center gap-[16px]"
      aria-label="Responsible gambling organisations"
    >
      {RESPONSIBLE_GAMBLING_ORGANIZATIONS.map((organization) => (
        <li key={organization.id} className="flex items-center">
          <Image
            src={organization.src}
            alt={organization.alt}
            width={organization.width}
            height={organization.height}
            className="grayscale opacity-90"
          />
        </li>
      ))}
    </ul>
  );
};
