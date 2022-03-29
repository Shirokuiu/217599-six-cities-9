import React from 'react';

import Rating from 'src/components/shared/rating/rating';
import { PreviewDescriptionWrapperProps } from 'src/types/preview-description-wrapper';

function PreviewDescriptionWrapper({
  offer,
  renderTitle = () => undefined,
  renderBookMark = () => undefined,
}: PreviewDescriptionWrapperProps) {
  const { price, rating, type } = offer;

  return (
    <>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value" data-testid="price-value">
            €{price}
          </b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        {renderBookMark()}
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <Rating rate={rating} />
        </div>
      </div>
      <h2 className="place-card__name">{renderTitle()}</h2>
      <p className="place-card__type" data-testid="type">
        {type}
      </p>
    </>
  );
}

export default PreviewDescriptionWrapper;
