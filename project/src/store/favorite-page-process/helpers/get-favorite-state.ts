import { FavoritesState } from 'src/types/favorite-process';
import { GroupedCity } from 'src/types/main-page';

export const getFavoriteState = (favorites: GroupedCity[]): FavoritesState =>
  favorites.length ? FavoritesState.Filled : FavoritesState.Empty;
