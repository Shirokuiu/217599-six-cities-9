import { createAsyncThunk } from '@reduxjs/toolkit';

import { ActionType } from 'src/store/favorite-page-process/action-type';
import UserService from 'src/services/user-service/user-service';
import { store } from 'src/store/index';
import { setFavorites } from 'src/store/favorite-page-process/favorite-page-process';

export const fetchFavorites = createAsyncThunk(ActionType.FetchFavorites, async () => {
  const data = await UserService.getFavorites();

  store.dispatch(setFavorites(data));
});
