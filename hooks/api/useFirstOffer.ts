import { useSiteData } from '@/hooks/api/index';

interface UseFirstOfferReturn {
  offerId: number | undefined;
  isLoading: boolean;
  welcomeText: string | null | undefined;
}

export const useFirstOffer = (): UseFirstOfferReturn => {
  const { data, isLoading } = useSiteData();
  const firstOfferId = data?.offers[0]?.id;
  const welcomeText = data?.offers[0]?.bonuses.welcome_bonus;

  return {
    offerId: firstOfferId,
    isLoading,
    welcomeText,
  };
};
