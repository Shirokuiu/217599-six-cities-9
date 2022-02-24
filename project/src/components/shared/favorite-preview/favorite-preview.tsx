import { FavoritePreviewProps } from 'src/types/favorite-preview';
import Bookmark from 'src/components/shared/bookmark/bookmark';
import React from 'react';
import Rating from 'src/components/shared/rating/rating';
import PreviewImageWrapper from 'src/components/shared/preview-image-wrapper/preview-image-wrapper';

function FavoritePreview({ offer }: FavoritePreviewProps) {
  const { isPremium, previewImage, price, isFavorite, rating, type, title } =
    offer;

  return (
    <>
      <PreviewImageWrapper isPremium={isPremium} previewImage={previewImage} />
      <div className="favorites__card-info place-card__info">
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
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </>
  );
}

export default FavoritePreview;
