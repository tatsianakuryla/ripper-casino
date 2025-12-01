import { z } from 'zod';

export const SiteInfoSchema = z.object({
  id: z.number(),
  link: z.string(),
  type: z.string(),
  android_app: z.string().nullable(),
  ios_app: z.string().nullable(),
  country_code: z.string(),
  country_name: z.string(),
});

export const CasinoBonusesSchema = z.object({
  rate: z.string(),
  amount: z.string(),
  country: z.string(),
  free_spins: z.string(),
  welcome_bonus: z.string(),
});

export const CasinoSchema = z.object({
  id: z.number(),
  name: z.string(),
  sub2: z.string(),
  countries: z.array(z.string()),
  logo: z.string(),
  logo_light: z.string(),
  bonuses: CasinoBonusesSchema,
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

export const SiteDataSchema = z.object({
  website: SiteInfoSchema,
  offers: z.array(CasinoSchema),
});

export const GameSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
});

export const GamesListSchema = z.array(GameSchema);

export type Casino = z.infer<typeof CasinoSchema>;
export type SiteData = z.infer<typeof SiteDataSchema>;
export type Game = z.infer<typeof GameSchema>;
export type GamesList = z.infer<typeof GamesListSchema>;

export const GameTypeSchema = z.enum(['gambling', 'betting']);
export type GameType = z.infer<typeof GameTypeSchema>;
