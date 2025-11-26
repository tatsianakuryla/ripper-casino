'use client';

import Image from 'next/image';
import { type JSX, useState } from 'react';

import { type FaqItem } from '@/components/sections/FAQ/FaqData';

interface FaqItemProperties {
  item: FaqItem;
}

export const FAQItem = ({ item }: FaqItemProperties): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-[16px]">
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className="bg-bg-dark-blue flex gap-[24px] items-center hover:bg-white/5 transition-colors py-[9px] px-[32px] rounded-lg cursor-pointer w-full"
      >
        <div className="flex-shrink-0 relative">
          {isOpen ? (
            <Image
              src="/minus.svg"
              alt="Close question"
              width={32}
              height={32}
            />
          ) : (
            <Image src="/plus.svg" alt="Open question" width={32} height={32} />
          )}
        </div>
        <h3 className="font-display text-white font-normal text-[24px] leading-[120%] tracking-[0%] uppercase text-left flex-1">
          {item.question}
        </h3>
      </button>
      {isOpen && (
        <div className="bg-bg-ocean-blue text-white font-sans font-medium text-[20px] leading-[40px] tracking-[0]">
          {item.answer}
        </div>
      )}
    </div>
  );
};
