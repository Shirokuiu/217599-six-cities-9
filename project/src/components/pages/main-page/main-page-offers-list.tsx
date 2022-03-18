import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Offer } from 'src/types/offer';
import OfferPreview from 'src/components/shared/offer-preview/offer-preview';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { parseSearchParams } from 'src/helpers/parse-search-params';
import { MainPageSortSearchParamType } from 'src/types/main-page';
import { sortOffers } from 'src/components/pages/main-page/helpers/sort-offers';
import { toggleHoverOffer } from 'src/store/main-page-process/main-page-process';

function MainPageOffersList() {
  const [searchParams] = useSearchParams();
  const currentCity = useAppSelector((state) => state.MAIN_PAGE.currentCity);
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

  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedOffers.map((offer: Offer) => (
        <OfferPreview
          key={offer.id}
          offer={offer}
          onImgMouseEnter={handleImgMouseEnter}
          onImgMouseLeave={handleImgMouseLeave}
        />
      ))}
    </div>
  );
}

export default MainPageOffersList;
