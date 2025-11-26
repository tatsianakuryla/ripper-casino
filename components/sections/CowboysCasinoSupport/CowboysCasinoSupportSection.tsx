import type { JSX } from 'react';

import { DescriptionBlock } from '@/components/ui/DescriptionBlock';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const CowboysCasinoSupportSection = (): JSX.Element => {
  return (
    <section className="bg-bg-ocean-blue pt-[148px] pb-[134px]">
      <div
        className={`mx-auto w-full max-w-[2560px] [@media(max-width:1480px)]:max-w-[1440px] px-4 md:px-8 xl:pl-[160px]
         xl:pr-[60px] flex`}
      >
        <div className="flex gap-[48px]">
          <DescriptionBlock>
            <SectionHeading className="mb-[80px]">
              Cowboys Casino Girls Support
            </SectionHeading>
            <p>
              Cowboys Casino prides itself on providing exceptional customer
              support to ensure a pleasant gaming experience for all its
              visitors. Support is available 24/7 via multiple channels,
              including live chat, email, and telephone. The live chat feature
              is especially popular as it provides instant assistance for urgent
              inquiries.
            </p>
          </DescriptionBlock>
          <div className="flex bg-[url('/support-image.png')] bg-[position:calc(50%-3px)_calc(50%-10px)] bg-no-repeat min-w-[475px]"></div>
        </div>
      </div>
    </section>
  );
};
