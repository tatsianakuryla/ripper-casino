export const GAMES_TYPE = {
  GAMBLING: 'gambling',
  BETTING: 'betting',
} as const;

type Games = typeof GAMES_TYPE;
export type Game = Games[keyof Games];
