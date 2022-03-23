import { AuthorizationStatus } from 'src/types/auth';
import { User } from 'src/types/user';
import { GroupedCity } from 'src/types/main-page';

export type InitialState = {
  authorizationStatus: AuthorizationStatus;
  favorites: FavoritesState.Unknown | GroupedCity[];
  me?: User;
};

export enum FavoritesState {
  // NOTE Unknown - когда идет фетч с бэка,
  // который будет резолвить лоадер
  Unknown = 'unknown',
  Empty = 'empty',
  Filled = 'filled',
}
