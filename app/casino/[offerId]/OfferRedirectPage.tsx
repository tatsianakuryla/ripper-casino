'use client';

import { useEffect } from 'react';

import type { Casino } from '@/api/schemas';
import type { JSX } from 'react';

import { Container } from '@/components/ui/Container';
import { Loader } from '@/components/ui/Loader/Loader';
import { useSiteData } from '@/hooks/api';

interface OfferRedirectPageProperties {
  offerId: number;
}

export function OfferRedirectPage({
  offerId,
}: OfferRedirectPageProperties): JSX.Element {
  const { data } = useSiteData();

  useEffect(() => {
    if (!data?.offers) return;

    const offer: Casino | undefined = data.offers.find(
      (offer) => offer.id === offerId,
    );

    if (offer?.link) {
      window.location.href = offer.link;
    }
  }, [data, offerId]);

  return (
    <main>
      <Container styles="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <Loader size={48} />
      </Container>
    </main>
  );
}
