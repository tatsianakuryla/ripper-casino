import Image from 'next/image';

import type { JSX } from 'react';

interface toggleAccordion {
  toggleAccordion: () => void;
}

export const MoreInfoButton = ({
  toggleAccordion,
}: toggleAccordion): JSX.Element => {
  return (
    <button
      onClick={toggleAccordion}
      className="hover:opacity-80 transition-opacity mx-auto flex items-center justify-center cursor-pointer w-[32px] h-[32px]"
      aria-label="More info"
    >
      <Image
        src="/more-info-btn.png"
        alt="More info"
        width={24}
        height={24}
        className="object-contain"
      />
    </button>
  );
};
