import { createAsyncThunk } from '@reduxjs/toolkit';

import { api, store } from 'src/store/index';
import { Offer } from 'src/types/offer';
import { APIRoute } from 'src/services/constants/constants';
import { setOffers } from 'src/store/main-page-process/main-page-process';
import { ActionType } from 'src/store/api-actions/offers/action-type';

export const getOffers = createAsyncThunk(ActionType.GetOffers, async () => {
  const { data } = await api.get<Offer[]>(APIRoute.Hotels);

  store.dispatch(setOffers(data));
});
