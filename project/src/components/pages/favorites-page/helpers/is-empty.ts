import { FavoritesState } from 'src/types/user-process';
import { GroupedCity } from 'src/types/main-page';

export const isEmpty = (favorites: FavoritesState.Unknown | GroupedCity[]): boolean =>
  favorites !== 'unknown' && !favorites.length;
