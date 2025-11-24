import {
  type Game,
  type GameCategoriesResponse,
  GameCategoriesResponseSchema,
  type OffersResponse,
  OffersResponseSchema,
} from '@/api/api.types';
import { http_client } from '@/api/http_client';
import {
  GAMES_URL,
  WEBSITE_DATA_URL,
} from '@/shared/constants/endpoints.constants';
import { handle_error } from '@/shared/helpers/handle_error';
import { Validator } from '@/shared/validator/validator';

class Api_manager {
  public async getWebsiteData(): Promise<OffersResponse> {
    try {
      const response = await http_client.get(WEBSITE_DATA_URL);
      return Validator.validate(
        OffersResponseSchema,
        response.data,
        'Website data',
      );
    } catch (error) {
      return handle_error(error);
    }
  }

  public async getGames(type: Game): Promise<GameCategoriesResponse> {
    try {
      const response = await http_client.get(GAMES_URL(type));
      return Validator.validate(
        GameCategoriesResponseSchema,
        response.data,
        'Games data',
      );
    } catch (error) {
      return handle_error(error);
    }
  }
}

export const apiManager = new Api_manager();
