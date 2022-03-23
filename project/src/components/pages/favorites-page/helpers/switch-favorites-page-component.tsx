import { FavoritesState } from 'src/types/user-process';
import { GroupedCity } from 'src/types/main-page';
import Loader from 'src/components/shared/loader/loader';
import FavoritesPageEmpty from 'src/components/pages/favorites-page/favorites-page-empty';
import FavoritesPageContent from 'src/components/pages/favorites-page/favorites-page-content';
import { getFavoritesState } from 'src/components/pages/favorites-page/helpers/get-favorites-state';

export const switchFavoritesPageComponent = (
  favorites: FavoritesState.Unknown | GroupedCity[],
): JSX.Element => {
  const stateType = getFavoritesState(favorites);

  switch (stateType) {
    case FavoritesState.Unknown:
      return <Loader />;
    case FavoritesState.Empty:
      return <FavoritesPageEmpty />;
    default:
      return <FavoritesPageContent />;
  }
};
