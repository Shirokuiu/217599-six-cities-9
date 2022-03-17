import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from 'src/store/constants/constants';
import { mainPageProcess } from 'src/store/main-page-process/main-page-process';
import { userProcess } from 'src/store/user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.MainPage]: mainPageProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
