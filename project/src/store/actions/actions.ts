import { createAction } from '@reduxjs/toolkit';

import {
  GROUP_CITIES,
  SET_CURRENT_CITY,
  SET_CURRENT_OFFER
} from 'src/store/actions/action-types';
import { Offer } from 'src/types/offer';

export const groupCities = createAction(GROUP_CITIES);
export const setCurrentCity = createAction<string>(SET_CURRENT_CITY);
export const setCurrentOffer = createAction<Offer | undefined>(
  SET_CURRENT_OFFER,
);
