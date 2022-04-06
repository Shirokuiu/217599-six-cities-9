import { createSlice } from '@reduxjs/toolkit';

import { InitialState, OfferStatus } from 'src/types/offer-page-process';
import { NameSpace } from 'src/store/constants/constants';
import { ActionType } from 'src/store/offer-page-process/api-actions/action-type';
import { Offer } from 'src/types/offer';

const initialState: InitialState = {
  offer: undefined,
  offerStatus: OfferStatus.Unknown,
};

export const offerPageProcess = createSlice({
  name: NameSpace.OfferPage,
  initialState,
  reducers: {
    [ActionType.SetOffer](state, { payload: offer }: { payload: Offer }) {
      state.offerStatus = OfferStatus.Filled;
      state.offer = offer;
    },
    [ActionType.ToggleOfferStatus](state, { payload: offerStatus }: { payload: OfferStatus }) {
      state.offerStatus = offerStatus;
    },
    [ActionType.ClearState](state) {
      state.offerStatus = OfferStatus.Unknown;
      state.offer = undefined;
    },
  },
});

export const { setOffer, toggleOfferStatus, clearState } = offerPageProcess.actions;
