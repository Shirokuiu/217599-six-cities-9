import { createAsyncThunk } from '@reduxjs/toolkit';

import { ActionType } from 'src/store/offer-page-process/api-actions/action-type';
import HotelsService from 'src/services/hotels-service/hotels-service';
import {
  setOffer,
  toggleOfferStatus,
} from 'src/store/offer-page-process/reducer/offer-page-process';
import { OfferStatus } from 'src/types/offer-page-process';

export const getOffer = createAsyncThunk(
  ActionType.GetOffer,
  async (offerId: number, { dispatch }) => {
    dispatch(toggleOfferStatus(OfferStatus.Loading));

    try {
      const data = await HotelsService.getOffer(offerId);

      dispatch(setOffer(data));
    } catch (e) {
      dispatch(toggleOfferStatus(OfferStatus.NotFound));
    }
  },
);
