import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/hooks';
import { fetchFavorites } from 'src/store/user-process/api-actions';
import { switchFavoritesPageComponent } from 'src/components/pages/favorites-page/helpers/switch-favorites-page-component';

function FavoritesPage() {
  const favorites = useAppSelector((state) => state.USER.favorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  return switchFavoritesPageComponent(favorites);
}

export default FavoritesPage;
