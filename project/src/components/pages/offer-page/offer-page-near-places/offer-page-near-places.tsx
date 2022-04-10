import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/hooks';
import OfferPreview from 'src/components/shared/offer-preview/offer-preview';
import Bookmark from 'src/components/shared/bookmark/bookmark/bookmark';
import { Offer } from 'src/types/offer';
import { toggleHoverOffer } from 'src/store/offer-page-process/reducer/offer-page-process';
import {
  apiRemoveFavoriteOffer,
  apiSetFavoriteOffer
} from 'src/store/offer-page-process/api-actions/api-actions';
import { AuthorizationStatus } from 'src/types/auth';
import { AppRoutingPath } from 'src/types/app';
import { getNearOffers } from 'src/store/offer-page-process/selectors';
import { getAuthorizationStatus } from 'src/store/user-process/selectors';

function OfferPageNearPlaces() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const nearOffers = useAppSelector(getNearOffers);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

    isActive
      ? dispatch(apiSetFavoriteOffer({ offerId, type: 'nearOffer' }))
      : dispatch(apiRemoveFavoriteOffer({ offerId, type: 'nearOffer' }));
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
