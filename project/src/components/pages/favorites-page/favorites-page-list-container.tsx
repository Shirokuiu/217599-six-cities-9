import { useAppSelector } from 'src/hooks';
import FavoritesPageList from 'src/components/pages/favorites-page/favorites-page-list/favorites-page-list';

function FavoritesPageListContainer() {
  const favoriteItems = useAppSelector((state) => state.FAVORITE_PAGE.favorite.items);

  return <FavoritesPageList favorites={favoriteItems} />;
}

export default FavoritesPageListContainer;
