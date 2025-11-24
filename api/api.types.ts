import { z } from 'zod';

export const WebsiteSchema = z.object({
  id: z.number(),
  link: z.string(),
  type: z.string(),
  android_app: z.string().nullable(),
  ios_app: z.string().nullable(),
  country_code: z.string(),
  country_name: z.string(),
});

export const OfferBonusesSchema = z.object({
  rate: z.string(),
  amount: z.string(),
  country: z.string(),
  free_spins: z.string(),
  welcome_bonus: z.string(),
});

export const OfferSchema = z.object({
  id: z.number(),
  name: z.string(),
  sub2: z.string(),
  countries: z.array(z.string()),
  logo: z.string(),
  logo_light: z.string(),
  bonuses: OfferBonusesSchema,
  domain_id: z.number(),
  wager: z.string().nullable(),
  bonus_code: z.string().nullable(),
  type: z.string(),
  active: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  domain_url: z.string(),
  position: z.number(),
  country_code: z.string(),
  website_id: z.number().nullable(),
  link: z.string(),
});

export const OffersResponseSchema = z.object({
  website: WebsiteSchema,
  offers: z.array(OfferSchema),
});

export const GameCategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
});

export const GameCategoriesResponseSchema = z.array(GameCategorySchema);

export type Website = z.infer<typeof WebsiteSchema>;
export type OfferBonuses = z.infer<typeof OfferBonusesSchema>;
export type Offer = z.infer<typeof OfferSchema>;
export type OffersResponse = z.infer<typeof OffersResponseSchema>;
export type GameCategory = z.infer<typeof GameCategorySchema>;
export type GameCategoriesResponse = z.infer<
  typeof GameCategoriesResponseSchema
>;

export const GameSchema = z.enum(['gambling', 'betting']);
export type Game = z.infer<typeof GameSchema>;
