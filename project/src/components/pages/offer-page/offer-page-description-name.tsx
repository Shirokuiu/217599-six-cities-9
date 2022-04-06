import React from 'react';
import { useParams } from 'react-router-dom';

import { OfferPageDescriptionNameProps } from 'src/types/offer-page';
import Bookmark from 'src/components/shared/bookmark/bookmark/bookmark';
import { StyleMode } from 'src/types/bookmark';
import { useAppDispatch } from 'src/hooks';
import {
  apiRemoveFavoriteOffer,
  apiSetFavoriteOffer,
} from 'src/store/offer-page-process/api-actions/api-actions';

function OfferPageDescriptionName({ offer }: OfferPageDescriptionNameProps) {
  const params = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const handleToggleActiveMark = (isActive: boolean) => {
    if (params.id) {
      dispatch(isActive ? apiSetFavoriteOffer(+params.id) : apiRemoveFavoriteOffer(+params.id));
    }
  };

  return (
    <div className="property__name-wrapper">
      <h1 className="property__name">{offer.title}</h1>
      <Bookmark
        isActive={offer.isFavorite}
        className="property__bookmark-button"
        classNameIcon="property__bookmark-icon"
        styleMode={StyleMode.Md}
        onToggleActive={handleToggleActiveMark}
      />
    </div>
  );
}

export default OfferPageDescriptionName;
