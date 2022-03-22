import { createSlice } from '@reduxjs/toolkit';

import { InitialState } from 'src/types/user-process';
import { AuthorizationStatus } from 'src/types/auth';
import { NameSpace } from 'src/store/constants/constants';
import { ActionType } from 'src/store/user-process/action-type';
import { User } from 'src/types/user';

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  me: undefined,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    [ActionType.SetAuthStatus](
      state,
      { payload: authorizationStatus }: { payload: AuthorizationStatus },
    ) {
      state.authorizationStatus = authorizationStatus;
    },
    [ActionType.SetMe](state, { payload: user }: { payload: User | undefined }) {
      state.me = user;
    },
  },
});

export const { setAuthStatus, setMe } = userProcess.actions;
