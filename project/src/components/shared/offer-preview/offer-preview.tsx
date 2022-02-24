import { OfferPreviewProps } from 'src/types/offer-preview';
import { getClassName } from 'src/helpers/get-class-name';
import Bookmark from 'src/components/shared/bookmark/bookmark';
import Rating from 'src/components/shared/rating/rating';
import React from 'react';
import PreviewImageWrapper from 'src/components/shared/preview-image-wrapper/preview-image-wrapper';

function OfferPreview({
  classNames,
  offer,
  onImgMouseEnter,
}: OfferPreviewProps) {
  const { isPremium, previewImage } = offer;
  const articleClass = getClassName({ classNames, defaultClass: 'place-card' });

  const handleImgMouseEnter = () => {
    if (onImgMouseEnter) {
      onImgMouseEnter(offer);
    }
  };

  return (
    <article className={articleClass}>
      <PreviewImageWrapper
        isPremium={isPremium}
        previewImage={previewImage}
        onImgMouseEnter={handleImgMouseEnter}
      />
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
