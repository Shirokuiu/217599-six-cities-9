import { GroupedCity } from 'src/types/main-page';

export type InitialState = {
  favorite: {
    favoriteState: FavoritesState;
    items: GroupedCity[];
  };
};

export enum FavoritesState {
  // NOTE Unknown - когда идет фетч с бэка,
  // который будет резолвить лоадер
  Unknown = 'unknown',
  Empty = 'empty',
  Filled = 'filled',
}

export type UnmarkPayload = {
  id: number;
  offerId: number;
};
