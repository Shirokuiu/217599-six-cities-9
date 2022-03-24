import { GroupedCity } from 'src/types/main-page';

export type InitialState = {
  favorites: FavoritesState.Unknown | GroupedCity[];
};

export enum FavoritesState {
  // NOTE Unknown - когда идет фетч с бэка,
  // который будет резолвить лоадер
  Unknown = 'unknown',
  Empty = 'empty',
  Filled = 'filled',
}
