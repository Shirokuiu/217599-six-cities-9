import { createAsyncThunk } from '@reduxjs/toolkit';

import { ActionType } from 'src/store/favorite-page-process/action-type';
import UserService from 'src/services/user-service/user-service';
import { store } from 'src/store/index';
import { setFavorites, unmark } from 'src/store/favorite-page-process/favorite-page-process';
import FavoritesService from 'src/services/favorites-service/favorites-service';
import { UnmarkPayload } from 'src/types/favorite-process';

export const fetchFavorites = createAsyncThunk(ActionType.FetchFavorites, async () => {
  const data = await UserService.getFavorites();

  store.dispatch(setFavorites(data));
});

export const apiUnmark = createAsyncThunk(
  ActionType.ApiUnmark,
  async ({ id, offerId }: UnmarkPayload) => {
    await FavoritesService.remove(offerId);

    store.dispatch(unmark({ id, offerId }));
  },
);
