import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/hooks';
import { switchFavoritesPageComponent } from 'src/components/pages/favorites-page/helpers/switch-favorites-page-component';
import { fetchFavorites } from 'src/store/favorite-page-process/api-actions/api-actions';
import { clearState } from 'src/store/favorite-page-process/reducer/favorite-page-process';
import { getFavoriteState } from 'src/store/favorite-page-process/selectors';

function FavoritesPage() {
  const favoriteState = useAppSelector(getFavoriteState);
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
