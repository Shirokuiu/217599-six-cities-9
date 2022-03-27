import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/hooks';
import { switchFavoritesPageComponent } from 'src/components/pages/favorites-page/helpers/switch-favorites-page-component';
import { fetchFavorites } from 'src/store/favorite-page-process/api-actions';
import { clearState } from 'src/store/favorite-page-process/favorite-page-process/favorite-page-process';

function FavoritesPage() {
  const favoriteState = useAppSelector((state) => state.FAVORITE_PAGE.favorite.favoriteState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());

    return () => {
      dispatch(clearState());
    };
  }, []);

  return switchFavoritesPageComponent(favoriteState);
}

export default FavoritesPage;
