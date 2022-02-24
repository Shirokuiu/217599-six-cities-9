import { OfferPreviewProps } from 'src/types/offer-preview';
import { getClassName } from 'src/helpers/get-class-name';
import Bookmark from 'src/components/shared/bookmark/bookmark';
import Rating from 'src/components/shared/rating/rating';
import React from 'react';

function OfferPreview({
  classNames,
  offer,
  onImgMouseEnter,
}: OfferPreviewProps) {
  const articleClass = getClassName({ classNames, defaultClass: 'place-card' });

  const handleImgMouseEnter = (evt: React.MouseEvent) => {
    evt.preventDefault();

    if (onImgMouseEnter) {
      onImgMouseEnter(offer);
    }
  };

  return (
    <article className={articleClass}>
      {offer.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className="place-card__image-wrapper">
        <a onMouseEnter={handleImgMouseEnter}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          {<Bookmark isActive={offer.isFavorite} />}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <Rating rate={offer.rating} />
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferPreview;
