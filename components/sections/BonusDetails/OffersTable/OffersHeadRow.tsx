import type { JSX } from 'react';

import { TableBorder } from '@/components/ui/TableBorder';

export const OffersHeadRow = (): JSX.Element => {
  const thStyleBasic = 'pr-[19px] pl-[20px] py-[20px] text-center relative';
  return (
    <tr className="font-sans font-medium text-[24px] leading-[100%] tracking-[0] align-middle text-center">
      <th className="pl-[16px] pr-[19px] py-[20px] text-center relative">
        Casino
        <TableBorder />
      </th>
      <th className={thStyleBasic}>
        Bonuses
        <TableBorder />
      </th>
      <th className={thStyleBasic}>
        Rate
        <TableBorder />
      </th>
      <th className={thStyleBasic}>
        Free Spins
        <TableBorder />
      </th>
      <th className={thStyleBasic}>
        More info
        <TableBorder />
      </th>
      <th className="pr-[16px] pl-[20px] py-[20px] text-center">Get</th>
    </tr>
  );
};
