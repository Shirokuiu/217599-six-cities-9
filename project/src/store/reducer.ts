import { createReducer } from '@reduxjs/toolkit';
import { offers } from 'src/mocks/offers';

import { InitialState } from 'src/types/state';
import { AuthorizationStatus } from 'src/types/auth';
import { groupOffersByCity } from 'src/helpers/group-offers-by-city';
import { getCurrentOffer } from 'src/store/helpers/get-current-offer';
import {
  groupCities,
  setCurrentCity,
  setCurrentOffer
} from 'src/store/actions/actions';

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Auth,
  groupedCities: [],
  currentCity: undefined,
  currentOffer: undefined,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(groupCities, (state) => {
      state.groupedCities = groupOffersByCity(offers);
    })
    .addCase(setCurrentCity, (state, { payload: country }) => {
      state.currentCity = getCurrentOffer({
        countryName: country,
        groupedCities: state.groupedCities,
      });
    })
    .addCase(setCurrentOffer, (state, { payload: currentOffer }) => {
      state.currentOffer = currentOffer;
    });
});

export { reducer };
