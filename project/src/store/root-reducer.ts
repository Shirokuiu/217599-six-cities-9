import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from 'src/store/constants/constants';
import { mainPageProcess } from 'src/store/main-page-process/reducer/main-page-process';
import { userProcess } from 'src/store/user-process/reducer/user-process';
import { favoritePageProcess } from 'src/store/favorite-page-process/reducer/favorite-page-process';
import { offerPageProcess } from 'src/store/offer-page-process/reducer/offer-page-process';

export const rootReducer = combineReducers({
  [NameSpace.MainPage]: mainPageProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.FavoritePage]: favoritePageProcess.reducer,
  [NameSpace.OfferPage]: offerPageProcess.reducer,
});
