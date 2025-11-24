import type { GameType } from '@/api/schemas';

import { API_BASE_URL, SITE_ID } from '@/shared/constants/main.constants';

export const SITE_DATA_ENDPOINT = `${API_BASE_URL}/api/website/get-website/${SITE_ID}`;
export const GAMES_ENDPOINT = (type: GameType): string =>
  `${API_BASE_URL}/api/website/get-games/${type}`;
