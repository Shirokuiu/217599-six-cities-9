import { createSlice } from '@reduxjs/toolkit';

import { InitialState } from 'src/types/user-process';
import { AuthorizationStatus } from 'src/types/auth';
import { NameSpace } from 'src/store/constants/constants';
import { ActionType } from 'src/store/user-process/action-type';

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  me: undefined,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    [ActionType.SetAuthStatus](state, { payload: authorizationStatus }) {
      state.authorizationStatus = authorizationStatus;
    },
    [ActionType.SetMe](state, { payload: user }) {
      state.me = user;
    },
  },
});

export const { setAuthStatus, setMe } = userProcess.actions;
