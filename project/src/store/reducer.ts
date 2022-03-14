import { createReducer } from '@reduxjs/toolkit';

import { InitialState } from 'src/types/state';
import { AuthorizationStatus } from 'src/types/auth';
import { groupOffersByCity } from 'src/helpers/group-offers-by-city';
import { getCurrentOffer } from 'src/store/helpers/get-current-offer';
import {
  groupCities,
  setAuthStatus,
  setCurrentCity,
  setCurrentOffer,
  setOffers,
  setMe
} from 'src/store/actions/actions';

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  me: undefined,
  offers: [],
  groupedCities: [],
  currentCity: undefined,
  currentOffer: undefined,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, { payload: offerItems }) => {
      state.offers = offerItems;
    })
    .addCase(groupCities, (state) => {
      state.groupedCities = groupOffersByCity(state.offers);
    })
    .addCase(setCurrentCity, (state, { payload: country }) => {
      state.currentCity = getCurrentOffer({
        countryName: country,
        groupedCities: state.groupedCities,
      });
    })
    .addCase(setCurrentOffer, (state, { payload: currentOffer }) => {
      state.currentOffer = currentOffer;
    })
    .addCase(setAuthStatus, (state, { payload: authorizationStatus }) => {
      state.authorizationStatus = authorizationStatus;
    })
    .addCase(setMe, (state, { payload: user }) => {
      state.me = user;
    });
});

export { reducer };
