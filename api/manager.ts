import { client } from '@/api/client';
import { GAMES_ENDPOINT, SITE_DATA_ENDPOINT } from '@/api/endpoints';
import {
  type GameType,
  type GamesList,
  GamesListSchema,
  type SiteData,
  SiteDataSchema,
} from '@/api/schemas';
import { handleError } from '@/shared/helpers/handle-error';
import { Validator } from '@/shared/helpers/validator';

class Manager {
  public async getSiteData(): Promise<SiteData> {
    try {
      const response = await client.get(SITE_DATA_ENDPOINT);
      return Validator.validate(SiteDataSchema, response.data, 'Site data');
    } catch (error) {
      return handleError(error);
    }
  }

  public async getGames(type: GameType): Promise<GamesList> {
    try {
      const response = await client.get(GAMES_ENDPOINT(type));
      return Validator.validate(GamesListSchema, response.data, 'Games list');
    } catch (error) {
      return handleError(error);
    }
  }
}

export const apiManager = new Manager();
