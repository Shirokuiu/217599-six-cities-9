import { createAsyncThunk } from '@reduxjs/toolkit';

import { store } from 'src/store/index';
import { AuthorizationStatus } from 'src/types/auth';
import { LoginPageFormBody } from 'src/types/login-page';
import Token from 'src/services/token';
import { setAuthStatus, setMe } from 'src/store/user-process/user-process';
import UserService from 'src/services/user-service/user-service';
import { ActionType } from 'src/store/user-process/action-type';

export const checkAuth = createAsyncThunk(ActionType.CheckAuth, async () => {
  const data = await UserService.checkAuth();

  store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
  store.dispatch(setMe(data));
});
export const login = createAsyncThunk(ActionType.Login, async (body: LoginPageFormBody) => {
  const data = await UserService.login(body);

  Token.set(data.token);
  store.dispatch(setAuthStatus(AuthorizationStatus.Auth));
  store.dispatch(setMe(data));
});
export const logout = createAsyncThunk(ActionType.Logout, async () => {
  await UserService.logout();

  Token.remove();
  store.dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
  store.dispatch(setMe(undefined));
});
