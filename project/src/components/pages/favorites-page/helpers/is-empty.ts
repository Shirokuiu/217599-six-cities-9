import { GroupedCity } from 'src/types/main-page';
import { FavoritesState } from 'src/types/favorite-process';

export const isEmpty = (favorites: FavoritesState.Unknown | GroupedCity[]): boolean =>
  favorites !== 'unknown' && !favorites.length;
