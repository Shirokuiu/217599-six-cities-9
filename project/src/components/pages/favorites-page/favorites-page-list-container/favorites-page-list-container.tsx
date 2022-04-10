import { useAppSelector } from 'src/hooks';
import FavoritesPageList from 'src/components/pages/favorites-page/favorites-page-list/favorites-page-list';
import { getFavoriteItems } from 'src/store/favorite-page-process/selectors';

function FavoritesPageListContainer() {
  const favoriteItems = useAppSelector(getFavoriteItems);

  return <FavoritesPageList favorites={favoriteItems} />;
}

export default FavoritesPageListContainer;
