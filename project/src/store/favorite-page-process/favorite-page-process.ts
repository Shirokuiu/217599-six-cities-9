import { createSlice } from '@reduxjs/toolkit';

import { InitialState, UnmarkPayload } from 'src/types/favorite-process';
import { FavoritesState } from 'src/types/favorite-process';
import { NameSpace } from 'src/store/constants/constants';
import { ActionType } from 'src/store/favorite-page-process/action-type';
import { Favorite } from 'src/types/favorite';
import { groupCities } from 'src/helpers/group-cities';
import { GroupedCity } from 'src/types/main-page';

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
    [ActionType.Unmark](state, { payload: { id, offerId } }: { payload: UnmarkPayload }) {
      const idxGroupedCity = (state.favorites as GroupedCity[]).findIndex(
        (groupedCity) => groupedCity.id === id,
      );

      (state.favorites[idxGroupedCity] as GroupedCity).offers = (
        state.favorites[idxGroupedCity] as GroupedCity
      ).offers.filter((offer) => offer.id !== offerId);

      (state.favorites as GroupedCity[]) = (state.favorites as GroupedCity[]).filter(
        ({ offers }) => offers.length !== 0,
      );
    },
  },
});

export const { setFavorites, unmark } = favoriteProcess.actions;
