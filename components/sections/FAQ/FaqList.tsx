import { FAQ_ITEMS } from './FaqData';

import type { JSX } from 'react';

import { FAQItem } from '@/components/sections/FAQ/FaqItem';
import { EmptyState } from '@/components/ui/EmptyState';

export const FaqList = (): JSX.Element => {
  const isEmpty = FAQ_ITEMS.length === 0 || !FAQ_ITEMS;

  if (isEmpty) {
    return <EmptyState message="No questions available" />;
  }

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
