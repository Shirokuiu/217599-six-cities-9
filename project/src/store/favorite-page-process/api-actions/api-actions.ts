import { createAsyncThunk } from '@reduxjs/toolkit';

import { ActionType } from 'src/store/favorite-page-process/api-actions/action-type';
import UserService from 'src/services/user-service/user-service';
import {
  setFavorites,
  unmark
} from 'src/store/favorite-page-process/reducer/favorite-page-process';
import FavoritesService from 'src/services/favorites-service/favorites-service';
import { UnmarkPayload } from 'src/types/favorite-process';

export const fetchFavorites = createAsyncThunk(
  ActionType.FetchFavorites,
  async (_arg, { dispatch }) => {
    const data = await UserService.getFavorites();

    dispatch(setFavorites(data));
  },
);

export const apiUnmark = createAsyncThunk(
  ActionType.ApiUnmark,
  async ({ id, offerId }: UnmarkPayload, { dispatch }) => {
    await FavoritesService.remove(offerId);

    dispatch(unmark({ id, offerId }));
  },
);
