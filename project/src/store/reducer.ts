import { createReducer } from '@reduxjs/toolkit';
import { offers } from 'src/mocks/offers';

import { mainPageGetOffers } from 'src/store/actions/main-page/main-page';
import { InitialState } from 'src/types/state';

const initialState: InitialState = {
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(mainPageGetOffers, (state) => {
    state.offers = offers;
  });
});

export { reducer };
