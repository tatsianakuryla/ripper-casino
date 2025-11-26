'use client';

import Image from 'next/image';

import type { JSX } from 'react';

export const CERTIFICATION_ORGANIZATIONS = [
  {
    id: 'betblocker',
    src: '/organizations/betblocker.svg',
    alt: 'BetBlocker gambling blocking tool logo',
    width: 200,
    height: 32,
  },
  {
    id: 'itech-labs',
    src: '/organizations/itech-labs.svg',
    alt: 'iTech Labs independent testing laboratory logo',
    width: 32,
    height: 32,
  },
  {
    id: 'ecogra',
    src: '/organizations/ecogra.svg',
    alt: 'eCOGRA certified fair gaming and player protection logo',
    width: 108,
    height: 32,
  },
] as const;

export const CertificationOrganizations = (): JSX.Element => {
  return (
    <ul
      className="flex items-center gap-[16px]"
      aria-label="Certification and audit organisations"
    >
      {CERTIFICATION_ORGANIZATIONS.map((org) => (
        <li key={org.id}>
          <Image
            src={org.src}
            alt={org.alt}
            width={org.width}
            height={org.height}
            className="grayscale opacity-90"
          />
        </li>
      ))}
    </ul>
  );
};
