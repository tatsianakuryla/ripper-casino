import axios from 'axios';

import { API_BASE_URL } from '@/shared/constants/main.constants';
import { handleError } from '@/shared/helpers/handle-error';

export const client = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  timeout: 10000,
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    return handleError(error);
  },
);
