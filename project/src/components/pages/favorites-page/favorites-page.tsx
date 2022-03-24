import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/hooks';
import { switchFavoritesPageComponent } from 'src/components/pages/favorites-page/helpers/switch-favorites-page-component';
import { fetchFavorites } from 'src/store/favorite-page-process/api-actions';

function FavoritesPage() {
  const favorites = useAppSelector((state) => state.FAVORITE_PAGE.favorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  return switchFavoritesPageComponent(favorites);
}

export default FavoritesPage;
