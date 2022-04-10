import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthorizationStatus } from 'src/types/auth';
import { LoginPageFormBody } from 'src/types/login-page';
import Token from 'src/services/token';
import { setAuthStatus, setMe } from 'src/store/user-process/reducer/user-process';
import UserService from 'src/services/user-service/user-service';
import { ActionType } from 'src/store/user-process/action-type';
import { APIErrorCode } from 'src/services/constants/constants';

export const checkAuth = createAsyncThunk(ActionType.CheckAuth, async (_arg, { dispatch }) => {
  try {
    const data = await UserService.checkAuth();

    dispatch(setAuthStatus(AuthorizationStatus.Auth));
    dispatch(setMe(data));
  } catch (e: any) {
    const {
      response: { status },
    } = e;

    switch (status as APIErrorCode) {
      case APIErrorCode.Unauthorized:
        dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
        break;
      default:
        dispatch(setAuthStatus(AuthorizationStatus.ApiError));
        break;
    }
  }
});

export const login = createAsyncThunk(
  ActionType.Login,
  async (body: LoginPageFormBody, { dispatch }) => {
    const data = await UserService.login(body);

    Token.set(data.token);
    dispatch(setAuthStatus(AuthorizationStatus.Auth));
    dispatch(setMe(data));
  },
);

export const logout = createAsyncThunk(ActionType.Logout, async (_arg, { dispatch }) => {
  await UserService.logout();

  Token.remove();
  dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
  dispatch(setMe(undefined));
});
