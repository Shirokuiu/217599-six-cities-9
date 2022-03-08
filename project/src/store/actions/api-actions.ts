import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_OFFERS } from 'src/store/actions/action-types';
import { api, store } from 'src/store/index';
import { Offer } from 'src/types/offer';
import { APIRoute } from 'src/services/constants/constants';
import { setOffers } from 'src/store/actions/actions';

export const fetchOffers = createAsyncThunk(FETCH_OFFERS, async () => {
  const { data } = await api.get<Offer[]>(APIRoute.Hotels);

  store.dispatch(setOffers(data));
});
