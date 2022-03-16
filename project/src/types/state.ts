import { store } from 'src/store';
import { AuthorizationStatus } from 'src/types/auth';
import { GroupedCity } from 'src/types/main-page';
import { Offer } from 'src/types/offer';
import { User } from 'src/types/user';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type InitialState = {
  authorizationStatus: AuthorizationStatus;
  me?: User;
  offers: Offer[];
  groupedCities: GroupedCity[];
  currentCity?: GroupedCity;
  currentOffer?: Offer;
};
