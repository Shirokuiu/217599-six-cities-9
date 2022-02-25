import { useState } from 'react';

import { Offer } from 'src/types/offer';
import OfferPreview from 'src/components/shared/offer-preview/offer-preview';
import { MainPageOffersListProps } from 'src/types/main-page-offers-list';

function MainPageOffersList({ offers }: MainPageOffersListProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<Offer>();

  const handleImgMouseEnter = (offer: Offer) => {
    setActiveOffer(offer);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => (
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
