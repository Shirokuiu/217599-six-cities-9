import { createAsyncThunk } from '@reduxjs/toolkit';

import { CHECK_AUTH, FETCH_OFFERS } from 'src/store/actions/action-types';
import { api, store } from 'src/store/index';
import { Offer } from 'src/types/offer';
import { APIRoute } from 'src/services/constants/constants';
import { setAuthStatus, setOffers, setMe } from 'src/store/actions/actions';
import { User } from 'src/types/user';
import { AuthorizationStatus } from 'src/types/auth';

export const fetchOffers = createAsyncThunk(FETCH_OFFERS, async () => {
  const { data } = await api.get<Offer[]>(APIRoute.Hotels);

  store.dispatch(setOffers(data));
});
export const checkAuth = createAsyncThunk(CHECK_AUTH, async () => {
  const { data } = await api.get<User>(APIRoute.Login);

  store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
  store.dispatch(setMe(data));
});
