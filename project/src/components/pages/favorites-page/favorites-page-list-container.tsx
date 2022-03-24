import { useAppSelector } from 'src/hooks';
import FavoritePageList from 'src/components/pages/favorites-page/favorite-page-list';

function FavoritesPageListContainer() {
  const favoriteItems = useAppSelector((state) => state.FAVORITE_PAGE.favorite.items);

  return <FavoritePageList favorites={favoriteItems} />;
}

export default FavoritesPageListContainer;
