import type { JSX } from 'react';

import { ContentBlock } from '@/components/ui/ContentBlock';

export const CowboysCasinoLoginMethods = (): JSX.Element => {
  return (
    <div className="flex gap-[48px] justify-between">
      <ContentBlock title="Deposit Methods" className="flex-1">
        <p>
          At&nbsp;Cowboys Casino, patrons are afforded a&nbsp;variety
          of&nbsp;convenient deposit methods to&nbsp;fund their accounts,
          ensuring that they can start playing without delay. The casino accepts
          major credit cards like Visa and MasterCard, which are among the most
          popular choices due to&nbsp;their wide accessibility and immediate
          transaction approval. Additionally, direct bank transfers are
          available, allowing for secure deposits straight from personal bank
          accounts.
        </p>
      </ContentBlock>
      <ContentBlock title="Withdrawal Methods" className="flex-1">
        <p>
          When it&nbsp;comes to&nbsp;withdrawing winnings, Cowboys Casino hours
          provide several straightforward and efficient options. Similar
          to&nbsp;deposits, players can choose to&nbsp;receive their funds
          through direct bank transfers, which safely move winnings directly
          into their personal bank accounts, usually within a&nbsp;few business
          days. Credit cards such as&nbsp;Visa and MasterCard are also supported
          for withdrawals, offering a convenient way to&nbsp;credit funds back
          to&nbsp;the same card used for deposits.
        </p>
      </ContentBlock>
    </div>
  );
};
