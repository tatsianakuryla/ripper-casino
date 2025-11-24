import axios from 'axios';

import { API_BASE_URL } from '@/shared/constants/main.constants';
import { handleApiError } from '@/shared/helpers/helpers';

export const httpClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  timeout: 10000,
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return handleApiError(error);
  },
);
