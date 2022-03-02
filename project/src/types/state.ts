import { store } from 'src/store';
import { Offer } from 'src/types/offer';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type InitialState = {
  offers: Offer[];
};
