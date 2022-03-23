import { useEffect, useState } from 'react';

import { useAppSelector } from 'src/hooks';
import FavoritePageList from 'src/components/pages/favorites-page/favorite-page-list';
import { GroupedCity } from 'src/types/main-page';

function FavoritesPageListContainer() {
  const favorites = useAppSelector((state) => state.USER.favorites);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (favorites !== 'unknown') {
      setLoading(false);
    }
  }, [favorites]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <FavoritePageList favorites={favorites as GroupedCity[]} />
  );
}

export default FavoritesPageListContainer;
