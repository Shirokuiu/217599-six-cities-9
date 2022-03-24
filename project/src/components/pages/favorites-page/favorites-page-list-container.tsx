import { useAppSelector } from 'src/hooks';
import FavoritePageList from 'src/components/pages/favorites-page/favorite-page-list';
import { GroupedCity } from 'src/types/main-page';

function FavoritesPageListContainer() {
  const favorites = useAppSelector((state) => state.FAVORITE_PAGE.favorites);

  return <FavoritePageList favorites={favorites as GroupedCity[]} />;
}

export default FavoritesPageListContainer;
