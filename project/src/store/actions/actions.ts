import { createAction } from '@reduxjs/toolkit';

import {
  GROUP_CITIES,
  SET_AUTH_STATUS,
  SET_CURRENT_CITY,
  SET_CURRENT_OFFER,
  SET_OFFERS,
  SET_ME
} from 'src/store/actions/action-types';
import { Offer } from 'src/types/offer';
import { AuthorizationStatus } from 'src/types/auth';
import { User } from 'src/types/user';

export const groupCities = createAction(GROUP_CITIES);
export const setCurrentCity = createAction<string>(SET_CURRENT_CITY);
export const setCurrentOffer = createAction<Offer | undefined>(SET_CURRENT_OFFER);
export const setOffers = createAction<Offer[]>(SET_OFFERS);
export const setAuthStatus = createAction<AuthorizationStatus>(SET_AUTH_STATUS);
export const setMe = createAction<User | undefined>(SET_ME);
