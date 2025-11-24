import axios from 'axios';

import { API_BASE_URL } from '@/shared/constants/main.constants';
import { handle_error } from '@/shared/helpers/handle_error';

export const http_client = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  timeout: 10000,
});

http_client.interceptors.response.use(
  (response) => response,
  (error) => {
    return handle_error(error);
  },
);
