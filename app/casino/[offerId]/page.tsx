import { OfferRedirectPage } from './OfferRedirectPage';

import type { JSX } from 'react';

interface OfferPageProperties {
  params: Promise<{ offerId: string }>;
}

export default async function OfferPage({
  params,
}: OfferPageProperties): Promise<JSX.Element> {
  const { offerId: offerIdString } = await params;
  const offerId = Number(offerIdString);

  return <OfferRedirectPage offerId={offerId} />;
}
