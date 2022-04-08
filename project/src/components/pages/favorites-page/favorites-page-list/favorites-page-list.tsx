import React from 'react';

import { GroupedCity } from 'src/types/main-page';
import { Offer } from 'src/types/offer';
import FavoritePreview from 'src/components/shared/favorite-preview/favorite-preview';
import { FavoritePageListProps } from 'src/types/favorite-page';
import Bookmark from 'src/components/shared/bookmark/bookmark/bookmark';
import { useAppDispatch } from 'src/hooks';
import { apiUnmark } from 'src/store/favorite-page-process/api-actions/api-actions';

function FavoritesPageList({ favorites }: FavoritePageListProps) {
  const dispatch = useAppDispatch();

  const handleUnmark = (isActive: boolean, id: number, offerId: number) => {
    if (!isActive) {
      dispatch(apiUnmark({ id, offerId }));
    }
  };

  return (
    <ul className="favorites__list" data-testid="list">
      {favorites.map(({ id, offers, city }: GroupedCity) => (
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
              <FavoritePreview
                key={offer.id}
                favorite={offer}
                renderBookmark={() => (
                  <Bookmark
                    isActive={offer.isFavorite}
                    onToggleActive={(isActive) => handleUnmark(isActive, id, offer.id)}
                  />
                )}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesPageList;
