import type { Game } from '@/api/api.types';

import { API_BASE_URL, SITE_ID } from '@/shared/constants/main.constants';

export const WEBSITE_DATA_URL = `${API_BASE_URL}/api/website/get-website/${SITE_ID}`;
export const GAMES_URL = (type: Game): string =>
  `${API_BASE_URL}/api/website/get-games/${type}`;
