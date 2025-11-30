import { client } from '@/api/client';
import { GAMES_ENDPOINT, SITE_DATA_ENDPOINT } from '@/api/endpoints';
import {
  type GameType,
  type GamesList,
  GamesListSchema,
  type SiteData,
  SiteDataSchema,
} from '@/api/schemas';
import { Validator } from '@/shared/helpers/validator';

class Manager {
  public async getSiteData(): Promise<SiteData> {
    const response = await client.get(SITE_DATA_ENDPOINT);
    return Validator.validate(SiteDataSchema, response.data, 'Site data');
  }

  public async getGames(type: GameType): Promise<GamesList> {
    const response = await client.get(GAMES_ENDPOINT(type));
    return Validator.validate(GamesListSchema, response.data, 'Games list');
  }
}

export const apiManager = new Manager();
