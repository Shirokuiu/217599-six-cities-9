import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import {
  APIErrorCode,
  BACKEND_URL,
  REQUEST_TIMEOUT
} from 'src/services/constants/constants';
import Token from 'src/services/token';
import { store } from 'src/store';
import { setAuthStatus, setMe } from 'src/store/actions/actions';
import { AuthorizationStatus } from 'src/types/auth';

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

  api.interceptors.response.use(
    (response) => response,
    (err) => {
      const {
        response: { status },
      } = err;

      switch (status) {
        case APIErrorCode.Unauthorized:
          store.dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
          store.dispatch(setMe(undefined));
          break;
      }
    },
  );

  return api;
};
