import { createAsyncThunk } from '@reduxjs/toolkit';

import { store } from 'src/store/index';
import {
  markFavoriteOffer,
  setOffers,
  unmarkFavoriteOffer,
} from 'src/store/main-page-process/reducer/main-page-process';
import HotelsService from 'src/services/hotels-service/hotels-service';
import { ActionType } from 'src/store/main-page-process/action-type';
import { ToggleFavoriteProps } from 'src/types/main-page-process';
import FavoritesService from 'src/services/favorites-service/favorites-service';

export const getOffers = createAsyncThunk(ActionType.GetOffers, async () => {
  const data = await HotelsService.getOffers();

  store.dispatch(setOffers(data));
});

export const apiSetFavoriteOffer = createAsyncThunk(
  ActionType.ApiSetFavoriteOffer,
  async ({ groupedCityId, offerId }: ToggleFavoriteProps) => {
    await FavoritesService.set(offerId);

    store.dispatch(markFavoriteOffer({ groupedCityId, offerId }));
  },
);

export const apiRemoveFavoriteOffer = createAsyncThunk(
  ActionType.ApiRemoveFavoriteOffer,
  async ({ groupedCityId, offerId }: ToggleFavoriteProps) => {
    await FavoritesService.remove(offerId);

    store.dispatch(unmarkFavoriteOffer({ groupedCityId, offerId }));
  },
);
