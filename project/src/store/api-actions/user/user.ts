import { createAsyncThunk } from '@reduxjs/toolkit';

import { api, store } from 'src/store/index';
import { User } from 'src/types/user';
import { APIRoute } from 'src/services/constants/constants';
import { AuthorizationStatus } from 'src/types/auth';
import { LoginPageFormBody } from 'src/types/login-page';
import Token from 'src/services/token';
import { ActionType } from 'src/store/api-actions/user/action-type';
import { setAuthStatus, setMe } from 'src/store/user-process/user-process';

export const checkAuth = createAsyncThunk(ActionType.CheckAuth, async () => {
  const { data } = await api.get<User>(APIRoute.Login);

  store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
  store.dispatch(setMe(data));
});
export const login = createAsyncThunk(ActionType.Login, async (body: LoginPageFormBody) => {
  const { data } = await api.post<User>(APIRoute.Login, body);

  Token.set(data.token);
  store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
  store.dispatch(setMe(data));
});
export const logout = createAsyncThunk(ActionType.Logout, async () => {
  await api.delete(APIRoute.Logout);

  Token.remove();
  store.dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
  store.dispatch(setMe(undefined));
});
