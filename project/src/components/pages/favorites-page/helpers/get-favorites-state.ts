import { FavoritesState } from 'src/types/user-process';
import { GroupedCity } from 'src/types/main-page';
import { isEmpty } from 'src/components/pages/favorites-page/helpers/is-empty';

export const getFavoritesState = (
  favorites: FavoritesState.Unknown | GroupedCity[],
): FavoritesState => {
  if (favorites === 'unknown') {
    return FavoritesState.Unknown;
  }

  if (isEmpty(favorites)) {
    return FavoritesState.Empty;
  }

  return FavoritesState.Filled;
};
