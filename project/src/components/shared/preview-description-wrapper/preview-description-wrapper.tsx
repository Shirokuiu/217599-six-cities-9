import React from 'react';

import Bookmark from 'src/components/shared/bookmark/bookmark';
import Rating from 'src/components/shared/rating/rating';
import { PreviewDescriptionWrapperProps } from 'src/types/preview-description-wrapper';

function PreviewDescriptionWrapper({
  offer,
  renderTitle = () => undefined,
}: PreviewDescriptionWrapperProps) {
  const { price, isFavorite, rating, type } = offer;

  return (
    <>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        {<Bookmark isActive={isFavorite} />}
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <Rating rate={rating} />
        </div>
      </div>
      <h2 className="place-card__name">{renderTitle()}</h2>
      <p className="place-card__type">{type}</p>
    </>
  );
}

export default PreviewDescriptionWrapper;
