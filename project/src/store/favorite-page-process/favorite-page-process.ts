import { createSlice } from '@reduxjs/toolkit';

import { InitialState } from 'src/types/favorite-process';
import { FavoritesState } from 'src/types/favorite-process';
import { NameSpace } from 'src/store/constants/constants';
import { ActionType } from 'src/store/favorite-page-process/action-type';
import { Favorite } from 'src/types/favorite';
import { groupCities } from 'src/helpers/group-cities';

const initialState: InitialState = {
  favorites: FavoritesState.Unknown,
};

export const favoriteProcess = createSlice({
  name: NameSpace.FavoritePage,
  initialState,
  reducers: {
    [ActionType.SetFavorites](state, { payload: favorites }: { payload: Favorite[] }) {
      state.favorites = groupCities(favorites);
    },
  },
});

export const { setFavorites } = favoriteProcess.actions;
