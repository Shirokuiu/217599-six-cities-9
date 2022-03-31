import Loader from 'src/components/shared/loader/loader';
import FavoritesPageEmpty from 'src/components/pages/favorites-page/favorites-page-empty';
import FavoritesPageContent from 'src/components/pages/favorites-page/favorites-page-content/favorites-page-content';
import { FavoritesState } from 'src/types/favorite-process';

export const switchFavoritesPageComponent = (favoriteState: FavoritesState): JSX.Element => {
  switch (favoriteState) {
    case FavoritesState.Unknown:
      return <Loader />;
    case FavoritesState.Empty:
      return <FavoritesPageEmpty />;
    default:
      return <FavoritesPageContent />;
  }
};
