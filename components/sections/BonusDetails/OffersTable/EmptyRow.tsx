import type { JSX } from 'react';

export const EmptyRow = (): JSX.Element => {
  return (
    <tr className="h-[24px]">
      <td colSpan={6}></td>
    </tr>
  );
};
