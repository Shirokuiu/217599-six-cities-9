import { createAsyncThunk } from '@reduxjs/toolkit';

import { store } from 'src/store/index';
import { setOffers } from 'src/store/main-page-process/main-page-process';
import Hotels from 'src/services/hotels/hotels';
import { ActionType } from 'src/store/main-page-process/action-type';

export const getOffers = createAsyncThunk(ActionType.GetOffers, async () => {
  const data = await Hotels.getOffers();

  store.dispatch(setOffers(data));
});
