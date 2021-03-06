import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Offer } from 'src/types/offer';
import OfferPreview from 'src/components/shared/offer-preview/offer-preview';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { parseSearchParams } from 'src/helpers/parse-search-params';
import { MainPageSortSearchParamType } from 'src/types/main-page';
import { sortOffers } from 'src/components/pages/main-page/helpers/sort-offers';
import { toggleHoverOffer } from 'src/store/main-page-process/reducer/main-page-process';
import { AuthorizationStatus } from 'src/types/auth';
import { AppRoutingPath } from 'src/types/app';
import {
  apiRemoveFavoriteOffer,
  apiSetFavoriteOffer
} from 'src/store/main-page-process/api-actions/api-actions';
import Bookmark from 'src/components/shared/bookmark/bookmark/bookmark';
import { getCurrentCity } from 'src/store/main-page-process/selectors';
import { getAuthorizationStatus } from 'src/store/user-process/selectors';

function MainPageOffersList() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentCity = useAppSelector(getCurrentCity);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const [sortedOffers, setSortedOffers] = useState<Offer[]>([]);
  const parsedSearchParams = parseSearchParams<MainPageSortSearchParamType>(searchParams);

  useEffect(() => {
    if (currentCity && parsedSearchParams.sort) {
      const _sortedOffers: Offer[] = sortOffers({
        offers: currentCity.offers,
        sortBy: parsedSearchParams.sort,
      });

      setSortedOffers(_sortedOffers);
    }
  }, [currentCity, searchParams]);

  const handleImgMouseEnter = (offer: Offer) => {
    dispatch(toggleHoverOffer(offer));
  };

  const handleImgMouseLeave = () => {
    dispatch(toggleHoverOffer(undefined));
  };

  const handleToggleBookmark = (isActive: boolean, offerId: number) => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoutingPath.Login);

      return;
    }

    const groupedCityId = currentCity?.id ?? 0;

    isActive
      ? dispatch(apiSetFavoriteOffer({ groupedCityId, offerId }))
      : dispatch(apiRemoveFavoriteOffer({ groupedCityId, offerId }));
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedOffers.map((offer: Offer) => (
        <OfferPreview
          key={offer.id}
          offer={offer}
          onImgMouseEnter={handleImgMouseEnter}
          onImgMouseLeave={handleImgMouseLeave}
          renderBookmark={() => (
            <Bookmark
              isActive={offer.isFavorite}
              onToggleActive={(isActive) => handleToggleBookmark(isActive, offer.id)}
            />
          )}
        />
      ))}
    </div>
  );
}

export default MainPageOffersList;
