import { createAction } from '@reduxjs/toolkit';
import { MAIN_PAGE_GET_OFFERS } from 'src/store/actions/main-page/action-types';

export const mainPageGetOffers = createAction(MAIN_PAGE_GET_OFFERS);
