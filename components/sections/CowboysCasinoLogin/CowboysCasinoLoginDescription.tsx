import type { JSX } from 'react';

import { DescriptionBlock } from '@/components/ui/DescriptionBlock';

export const CowboysCasinoLoginDescription = (): JSX.Element => {
  return (
    <DescriptionBlock className="gap-[12px] mb-[20px]">
      <p>
        Cowboys Casino is a prominent entertainment venue in Calgary, known for
        its dynamic gaming environment and variety of entertainment options. It
        houses numerous gaming tables, slot machines, and an exclusive poker
        room that attracts both local and visiting patrons. The casino also
        offers a rich selection of dining and live event experiences, making it
        a comprehensive destination for leisure and entertainment.
      </p>
      <p>
        For guests looking to enhance their experience, Cowboys Casino provides
        a streamlined login procedure through their website. This system allows
        patrons to manage their accounts, check points and rewards, and receive
        updates on upcoming Cowboys Casino events and promotions. Users can
        easily register online by entering personal details to create a secure
        account, which can then be used for a variety of services, including
        advance bookings and personalized gaming experiences.
      </p>
    </DescriptionBlock>
  );
};
