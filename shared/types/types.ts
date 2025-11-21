import { type APP_ROUTES } from '@/shared/constants/app_routes.constants';

export const GAMES_TYPE = {
  GAMBLING: 'gambling',
  BETTING: 'betting',
} as const;

type Games = typeof GAMES_TYPE;
export type Game = Games[keyof Games];

export type AppRoute = (typeof APP_ROUTES)[keyof typeof APP_ROUTES];
