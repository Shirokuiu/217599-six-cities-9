import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Offer } from 'src/types/offer';
import OfferPreview from 'src/components/shared/offer-preview/offer-preview';
import { useAppSelector } from 'src/hooks';
import { parseSearchParams } from 'src/helpers/parse-search-params';
import { MainPageSortSearchParamType } from 'src/types/main-page';
import { sortOffers } from 'src/components/pages/main-page/helpers/sort-offers';

function MainPageOffersList() {
  const [searchParams] = useSearchParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<Offer>();
  const { currentCity } = useAppSelector((state) => state);
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
    setActiveOffer(offer);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedOffers.map((offer: Offer) => (
        <OfferPreview
          key={offer.id}
          offer={offer}
          onImgMouseEnter={handleImgMouseEnter}
        />
      ))}
    </div>
  );
}

export default MainPageOffersList;
