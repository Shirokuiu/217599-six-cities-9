import { createAction } from '@reduxjs/toolkit';
import { GROUP_CITIES, SET_CURRENT_CITY } from 'src/store/actions/action-types';

export const groupCities = createAction(GROUP_CITIES);
export const setCurrentCity = createAction<string>(SET_CURRENT_CITY);
