import { createSlice } from '@reduxjs/toolkit';

import { FavoritesState, InitialState } from 'src/types/user-process';
import { AuthorizationStatus } from 'src/types/auth';
import { NameSpace } from 'src/store/constants/constants';
import { ActionType } from 'src/store/user-process/action-type';
import { User } from 'src/types/user';
import { groupCities } from 'src/helpers/group-cities';
import { Favorite } from 'src/types/favorite';

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  favorites: FavoritesState.Unknown,
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
    [ActionType.SetFavorites](state, { payload: favorites }: { payload: Favorite[] }) {
      state.favorites = groupCities(favorites);
    },
  },
});

export const { setAuthStatus, setMe, setFavorites } = userProcess.actions;
