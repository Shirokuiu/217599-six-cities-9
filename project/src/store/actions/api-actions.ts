import { createAsyncThunk } from '@reduxjs/toolkit';

import { CHECK_AUTH, FETCH_OFFERS, LOGIN } from 'src/store/actions/action-types';
import { api, store } from 'src/store/index';
import { Offer } from 'src/types/offer';
import { APIRoute } from 'src/services/constants/constants';
import { setAuthStatus, setMe, setOffers } from 'src/store/actions/actions';
import { User } from 'src/types/user';
import { AuthorizationStatus } from 'src/types/auth';
import { LoginPageFormBody } from 'src/types/login-page';
import Token from 'src/services/token';

export const fetchOffers = createAsyncThunk(FETCH_OFFERS, async () => {
  const { data } = await api.get<Offer[]>(APIRoute.Hotels);

  store.dispatch(setOffers(data));
});
export const checkAuth = createAsyncThunk(CHECK_AUTH, async () => {
  const { data } = await api.get<User>(APIRoute.Login);

  store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
  store.dispatch(setMe(data));
});
export const login = createAsyncThunk(LOGIN, async (body: LoginPageFormBody) => {
  const { data } = await api.post<User>(APIRoute.Login, body);

  Token.set(data.token);
  store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
  store.dispatch(setMe(data));
});
