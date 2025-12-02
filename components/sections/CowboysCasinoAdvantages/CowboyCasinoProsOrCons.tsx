import type { JSX } from 'react';

import { BulletList } from '@/components/ui/BulletList';

interface CowboyCasinoProsOrConsProperties {
  title: string;
  list: string[];
}

export const CowboyCasinoProsOrCons = ({
  title,
  list,
}: CowboyCasinoProsOrConsProperties): JSX.Element => {
  return (
    <div className="flex flex-col gap-[40px]">
      <h4 className="font-display font-normal text-[24px] leading-[100%] tracking-[0] uppercase align-middle text-white">
        {title}
      </h4>
      <BulletList>
        {list.map((advantage) => (
          <li key={advantage}>{advantage}</li>
        ))}
      </BulletList>
    </div>
  );
};
