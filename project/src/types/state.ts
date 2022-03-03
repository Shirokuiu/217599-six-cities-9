import { store } from 'src/store';
import { AuthorizationStatus } from 'src/types/auth';
import { GroupedCity } from 'src/types/main-page';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type InitialState = {
  authorizationStatus: AuthorizationStatus;
  groupedCities: GroupedCity[];
  currentCity?: GroupedCity;
};
