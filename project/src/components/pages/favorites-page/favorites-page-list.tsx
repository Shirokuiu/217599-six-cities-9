import { FavoritesPageListProps } from 'src/types/favorites-page-list';
import { GroupedCity } from 'src/types/main-page';
import FavoritePreview from 'src/components/shared/favorite-preview/favorite-preview';
import { Offer } from 'src/types/offer';

function FavoritesPageList({ groupedOffers }: FavoritesPageListProps) {
  return (
    <ul className="favorites__list">
      {groupedOffers.map(({ id, offers, city }: GroupedCity) => (
        <li key={id} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city.name}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offers.map((offer: Offer) => (
              <FavoritePreview key={offer.id} offer={offer} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesPageList;
