import axios, { AxiosInstance } from 'axios';

import { BACKEND_URL, REQUEST_TIMEOUT } from 'src/services/constants/constants';

export const createAPI = (): AxiosInstance =>
  axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });
