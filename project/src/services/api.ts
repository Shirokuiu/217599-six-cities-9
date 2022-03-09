import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { BACKEND_URL, REQUEST_TIMEOUT } from 'src/services/constants/constants';
import Token from 'src/services/token';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token: Token | null = Token.get();

    if (token) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  return api;
};
