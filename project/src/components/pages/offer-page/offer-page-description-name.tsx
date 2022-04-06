import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { OfferPageDescriptionNameProps } from 'src/types/offer-page';
import Bookmark from 'src/components/shared/bookmark/bookmark/bookmark';
import { StyleMode } from 'src/types/bookmark';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import {
  apiRemoveFavoriteOffer,
  apiSetFavoriteOffer,
} from 'src/store/offer-page-process/api-actions/api-actions';
import { AuthorizationStatus } from 'src/types/auth';
import { AppRoutingPath } from 'src/types/app';

function OfferPageDescriptionName({ offer }: OfferPageDescriptionNameProps) {
  const authorizationStatus = useAppSelector((state) => state.USER.authorizationStatus);
  const params = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleToggleActiveMark = (isActive: boolean) => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoutingPath.Login);

      return;
    }

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
