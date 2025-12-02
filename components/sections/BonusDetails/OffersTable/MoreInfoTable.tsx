import type { Casino } from '@/api/schemas';
import type { JSX } from 'react';

import { TableBorder } from '@/components/ui/TableBorder';

interface MoreInfoTableProperties {
  offer: Casino;
}

export const MoreInfoTable = ({
  offer,
}: MoreInfoTableProperties): JSX.Element => {
  const tdMainStyle =
    'py-[19px] pl-[16px] pr-[19px] text-left text-white relative';
  const tdBasicStyle = 'py-[19px] px-[20px] text-left text-white';
  return (
    <table className="w-full border-collapse bg-bg-ocean-blue">
      <colgroup>
        <col className="w-[18.4%]" />
        <col className="w-[81.6%]" />
      </colgroup>
      <tbody className="font-sans text-[18px] font-normal leading-[100%]">
        <tr className="border-b border-white/20">
          <td className={tdMainStyle}>
            Maximum amount:
            <TableBorder />
          </td>
          <td className={tdBasicStyle}>{offer.bonuses.amount ?? '–'}</td>
        </tr>

        <tr className="border-b border-white/20">
          <td className={tdMainStyle}>
            Wager:
            <TableBorder />
          </td>
          <td className={tdBasicStyle}>{offer.wager ?? '–'}</td>
        </tr>

        <tr>
          <td className={tdMainStyle}>
            Bonus Code:
            <TableBorder />
          </td>
          <td className={tdBasicStyle}>{offer.bonus_code ?? '–'}</td>
        </tr>
      </tbody>
    </table>
  );
};
