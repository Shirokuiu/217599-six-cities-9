import React from 'react';

import { useAppDispatch, useAppSelector } from 'src/hooks';
import OfferPreview from 'src/components/shared/offer-preview/offer-preview';
import Bookmark from 'src/components/shared/bookmark/bookmark/bookmark';
import { Offer } from 'src/types/offer';
import { toggleHoverOffer } from 'src/store/offer-page-process/reducer/offer-page-process';

function OfferPageNearPlaces() {
  const nearOffers = useAppSelector((state) => state.OFFER_PAGE.nearOffers);
  const dispatch = useAppDispatch();

  const handleImgMouseEnter = (offer: Offer) => {
    dispatch(toggleHoverOffer(offer));
  };

  const handleImgMouseLeave = () => {
    dispatch(toggleHoverOffer(undefined));
  };

  const handleToggleBookmark = (isActive: boolean, offerId: number) => {
    console.log('handleToggleBookmark');
  };

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {nearOffers.map((offer) => (
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
      </section>
    </div>
  );
}

export default OfferPageNearPlaces;
