import type { JSX } from 'react';

import { EmptyPage } from '@/components/ui/EmptyPage';

type CasinoPageParams = {
  offerId: string;
};

interface CasinoPageProperties {
  params: Promise<CasinoPageParams>;
}

export default async function CasinoPage({
  params,
}: CasinoPageProperties): Promise<JSX.Element> {
  const { offerId } = await params;
  return (
    <main>
      <EmptyPage title="Casino page " description={`Offer ID: ${offerId}`} />
    </main>
  );
}
