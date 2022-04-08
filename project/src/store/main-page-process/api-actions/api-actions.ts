import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  markFavoriteOffer,
  setOffers,
  unmarkFavoriteOffer
} from 'src/store/main-page-process/reducer/main-page-process';
import HotelsService from 'src/services/hotels-service/hotels-service';
import { ActionType } from 'src/store/main-page-process/action-type';
import { ToggleFavoriteProps } from 'src/types/main-page-process';
import FavoritesService from 'src/services/favorites-service/favorites-service';

export const getOffers = createAsyncThunk(ActionType.GetOffers, async (_arg, { dispatch }) => {
  const data = await HotelsService.getOffers();

  dispatch(setOffers(data));
});

export const apiSetFavoriteOffer = createAsyncThunk(
  ActionType.ApiSetFavoriteOffer,
  async ({ groupedCityId, offerId }: ToggleFavoriteProps, { dispatch }) => {
    await FavoritesService.set(offerId);

    dispatch(markFavoriteOffer({ groupedCityId, offerId }));
  },
);

export const apiRemoveFavoriteOffer = createAsyncThunk(
  ActionType.ApiRemoveFavoriteOffer,
  async ({ groupedCityId, offerId }: ToggleFavoriteProps, { dispatch }) => {
    await FavoritesService.remove(offerId);

    dispatch(unmarkFavoriteOffer({ groupedCityId, offerId }));
  },
);
