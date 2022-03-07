import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Offer } from 'src/types/offer';
import OfferPreview from 'src/components/shared/offer-preview/offer-preview';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { parseSearchParams } from 'src/helpers/parse-search-params';
import { MainPageSortSearchParamType } from 'src/types/main-page';
import { sortOffers } from 'src/components/pages/main-page/helpers/sort-offers';
import { setCurrentOffer } from 'src/store/actions/actions';

function MainPageOffersList() {
  const [searchParams] = useSearchParams();
  const { currentCity } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [sortedOffers, setSortedOffers] = useState<Offer[]>([]); // eslint-disable-line
  const parsedSearchParams =
    parseSearchParams<MainPageSortSearchParamType>(searchParams);

  useEffect(() => {
    if (currentCity && parsedSearchParams.sort) {
      setSortedOffers(
        sortOffers({
          offers: currentCity.offers,
          sortBy: parsedSearchParams.sort,
        }),
      );
    }
  }, [currentCity, searchParams]);

  const handleImgMouseEnter = (offer: Offer) => {
    dispatch(setCurrentOffer(offer));
  };

  const handleImgMouseLeave = () => {
    dispatch(setCurrentOffer(undefined));
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
