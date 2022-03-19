import { createSlice } from '@reduxjs/toolkit';

import { ActionType } from 'src/store/main-page-process/action-type';
import { groupOffersByCity } from 'src/helpers/group-offers-by-city';
import { getCurrentOffer } from 'src/store/helpers/get-current-offer';
import { InitialState } from 'src/types/main-page-process';
import { NameSpace } from 'src/store/constants/constants';

const initialState: InitialState = {
  offers: [],
  groupedCities: [],
  currentCity: undefined,
  currentOffer: undefined,
};

export const mainPageProcess = createSlice({
  name: NameSpace.MainPage,
  initialState,
  reducers: {
    [ActionType.SetOffers](state, { payload: offerItems }) {
      state.offers = offerItems;
    },
    [ActionType.GroupCities](state) {
      state.groupedCities = groupOffersByCity(state.offers);
    },
    [ActionType.SetCurrentCity](state, { payload: country }) {
      state.currentCity = getCurrentOffer({
        countryName: country,
        groupedCities: state.groupedCities,
      });
    },
    [ActionType.SetCurrentOffer](state, { payload: currentOffer }) {
      state.currentOffer = currentOffer;
    },
  },
});

export const { setOffers, groupCities, setCurrentCity, setCurrentOffer } = mainPageProcess.actions;
