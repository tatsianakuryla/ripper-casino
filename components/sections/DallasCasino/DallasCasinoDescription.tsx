import type { JSX } from 'react';

import { BulletList } from '@/components/ui/BulletList';
import { DescriptionBlock } from '@/components/ui/DescriptionBlock';

export const DallasCasinoDescription = (): JSX.Element => {
  return (
    <DescriptionBlock gap="21px" maxWidth="528px">
      <p>
        Discover the thrill of gaming at Cowboys Casino in Calgary, Canada. Dive
        into exciting games and vibrant entertainment. Join us for an
        unforgettable experience!
      </p>
      <BulletList>
        <li>C$20 in free play credits</li>
        <li>20% discount of birthday day</li>
        <li>loyalty program available</li>
      </BulletList>
      <p>
        Cowboys Casino, located in the heart of Calgary, Alberta, is a vibrant
        and bustling entertainment hub that offers a diverse range of gaming
        options. Renowned for its lively atmosphere and extensive gaming floors,
        this casino caters to both seasoned gamblers and newcomers. With a
        variety of table games, slots, and poker rooms, Cowboys Casino reviews
        are designed to deliver a thrilling experience. Additionally, it
        features dining venues and hosts various live events, making it a go-to
        destination for entertainment seekers in the region.
      </p>
    </DescriptionBlock>
  );
};
