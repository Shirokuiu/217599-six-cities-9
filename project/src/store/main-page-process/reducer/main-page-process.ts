import { createSlice } from '@reduxjs/toolkit';

import { ActionType } from 'src/store/main-page-process/api-actions/action-type';
import { getCurrentOffer } from 'src/store/main-page-process/helpers/get-current-offer';
import { HoveredOfferState, InitialState, ToggleFavoriteProps } from 'src/types/main-page-process';
import { NameSpace } from 'src/store/constants/constants';
import { Offer } from 'src/types/offer';
import { getGroupedCityIdx } from 'src/store/main-page-process/helpers/get-grouped-city-idx';
import { toggleFavoriteOffers } from 'src/store/main-page-process/helpers/toggle-favorite-offers';
import { groupCities } from 'src/helpers/group-cities';

const initialState: InitialState = {
  offers: [],
  groupedCities: [],
  currentCity: undefined,
  currentHoveredOffer: 'unknown',
};

export const mainPageProcess = createSlice({
  name: NameSpace.MainPage,
  initialState,
  reducers: {
    [ActionType.SetOffers](state, { payload: offers }: { payload: Offer[] }) {
      state.offers = offers;
    },
    [ActionType.GroupCitiesAction](state) {
      state.groupedCities = groupCities(state.offers);
    },
    [ActionType.SetCurrentCity](state, { payload: country }: { payload: string }) {
      state.currentCity = getCurrentOffer({
        countryName: country,
        groupedCities: state.groupedCities,
      });
    },
    [ActionType.ToggleHoverOffer](
      state,
      { payload: currentOffer }: { payload: HoveredOfferState },
    ) {
      state.currentHoveredOffer = currentOffer;
    },
    [ActionType.MarkFavoriteOffer](
      state,
      { payload: { groupedCityId, offerId } }: { payload: ToggleFavoriteProps },
    ) {
      const idx = getGroupedCityIdx(state.groupedCities, groupedCityId);

      state.groupedCities[idx].offers = toggleFavoriteOffers(
        idx,
        state.groupedCities,
        offerId,
        true,
      );
    },
    [ActionType.UnmarkFavoriteOffer](
      state,
      { payload: { groupedCityId, offerId } }: { payload: ToggleFavoriteProps },
    ) {
      const idx = getGroupedCityIdx(state.groupedCities, groupedCityId);

      state.groupedCities[idx].offers = toggleFavoriteOffers(
        idx,
        state.groupedCities,
        offerId,
        false,
      );
    },
    [ActionType.ClearState](state) {
      // NOTE Хз как по другому почистить стор
      // state = initialState или функцию передавать ничего не происходит
      state.offers = [];
      state.groupedCities = [];
      state.currentCity = undefined;
    },
  },
});

export const {
  setOffers,
  groupCitiesAction,
  setCurrentCity,
  toggleHoverOffer,
  markFavoriteOffer,
  unmarkFavoriteOffer,
  clearState,
} = mainPageProcess.actions;