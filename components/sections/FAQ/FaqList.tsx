import { FAQ_ITEMS } from './FaqData';

import type { JSX } from 'react';

import { FAQItem } from '@/components/sections/FAQ/FaqItem';

export const FaqList = (): JSX.Element => {
  return (
    <ul className="flex flex-col gap-[24px]">
      {FAQ_ITEMS.map((item) => (
        <li key={item.id}>
          <FAQItem item={item} />
        </li>
      ))}
    </ul>
  );
};
