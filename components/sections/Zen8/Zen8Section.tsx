import type { JSX } from 'react';

import { StoresLinks } from '@/components/sections/Zen8/StoresLinks';
import { Container } from '@/components/ui/Container';
import { ContentBlock } from '@/components/ui/ContentBlock';
import { DescriptionBlock } from '@/components/ui/DescriptionBlock';
import { SubsectionHeading } from '@/components/ui/SubsectionHeading';

export const Zen8Section = (): JSX.Element => {
  return (
    <section className="bg-bg-black pt-[69px] pb-[64px]">
      <Container styles="flex flex-col gap-[48px]">
        <div className="flex gap-[80px] mb-[6px]">
          <DescriptionBlock className="gap-[12px]">
            <SubsectionHeading className="mb-[60px]">
              Zen8 Cowboys Casino App
            </SubsectionHeading>
            <p className="mb-[31px]">
              Cowboys Casino offers a user-friendly mobile app that allows
              players to access their favorite games from anywhere, at any time.
              The app is designed for both iOS and Android devices, ensuring a
              broad compatibility range. With intuitive navigation and a
              responsive design, the app provides a seamless mobile gaming
              experience. Features include full account management capabilities,
              live game streaming, and the ability to make deposits and
              withdrawals directly through the app.
            </p>
            <StoresLinks />
          </DescriptionBlock>
          <div className="flex bg-[url('/zen8-img.png')] bg-[position:calc(50%+38px)_calc(50%-30px)] bg-no-repeat min-w-[526px] self-stretch"></div>
        </div>
        <div className="flex gap-[48px]">
          <ContentBlock title="Currencies" className="flex-1">
            <p>
              Reflecting its international customer base, Cowboys Casino accepts
              several major currencies for transactions. Players can conduct
              transactions in Canadian dollars (CAD), US dollars (USD), and
              Euros (EUR). This flexibility allows players from different
              regions to play and transact in their preferred or local currency,
              simplifying the process and enhancing their gaming experience.
            </p>
          </ContentBlock>
          <ContentBlock title="Languages" className="flex-1">
            <p>
              To accommodate a diverse clientele, Cowboys Casino offers its
              services in multiple languages. The primary language of operation
              is English, but the casino also provides language support for
              French and Spanish speakers.
            </p>
          </ContentBlock>
        </div>
      </Container>
    </section>
  );
};
