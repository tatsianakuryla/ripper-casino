import { OfferRedirectPage } from './OfferRedirectPage';

import type { JSX } from 'react';

interface OfferPageProperties {
  params: { offerId: string };
}

export default function OfferPage({
  params,
}: OfferPageProperties): JSX.Element {
  const offerId = Number(params.offerId);

  return <OfferRedirectPage offerId={offerId} />;
}
