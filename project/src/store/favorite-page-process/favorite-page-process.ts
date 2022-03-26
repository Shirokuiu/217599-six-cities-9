import { createSlice } from '@reduxjs/toolkit';

import { FavoritesState, InitialState, UnmarkPayload } from 'src/types/favorite-process';
import { NameSpace } from 'src/store/constants/constants';
import { ActionType } from 'src/store/favorite-page-process/action-type';
import { Favorite } from 'src/types/favorite';
import { groupCities } from 'src/helpers/group-cities';
import { getFavoriteState } from 'src/store/favorite-page-process/helpers/get-favorite-state';
import { unmarkFavorite } from 'src/store/favorite-page-process/helpers/unmark-city-favorite';

const initialState: InitialState = {
  favorite: {
    favoriteState: FavoritesState.Unknown,
    items: [],
  },
};

export const favoritePageProcess = createSlice({
  name: NameSpace.FavoritePage,
  initialState,
  reducers: {
    [ActionType.SetFavorites](state, { payload: favorites }: { payload: Favorite[] }) {
      state.favorite.items = groupCities(favorites);
      state.favorite.favoriteState = getFavoriteState(state.favorite.items);
    },
    [ActionType.Unmark](state, { payload: { id, offerId } }: { payload: UnmarkPayload }) {
      state.favorite.items = unmarkFavorite(state.favorite.items, id, offerId);
      state.favorite.favoriteState = getFavoriteState(state.favorite.items);
    },
    [ActionType.ClearState](state) {
      state.favorite = {
        favoriteState: FavoritesState.Unknown,
        items: [],
      };
    },
  },
});

export const { setFavorites, unmark, clearState } = favoritePageProcess.actions;
