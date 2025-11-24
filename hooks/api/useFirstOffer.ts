import { useSiteData } from '@/hooks/api/index';

interface UseFirstOfferReturn {
  offerId: number | undefined;
  isLoading: boolean;
}

export const useFirstOffer = (): UseFirstOfferReturn => {
  const { data, isLoading } = useSiteData();
  const firstOfferId = data?.offers[0]?.id;

  return {
    offerId: firstOfferId,
    isLoading,
  };
};
