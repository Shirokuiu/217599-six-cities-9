import { FavoritePreviewProps } from 'src/types/favorite-preview';
import Bookmark from 'src/components/shared/bookmark/bookmark';
import React from 'react';
import Rating from 'src/components/shared/rating/rating';

function FavoritePreview({ offer }: FavoritePreviewProps) {
  const { isPremium, previewImage, price, isFavorite, rating, type, title } =
    offer;

  return (
    <>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={150}
            height={110}
            alt="Place image"
          />
        </a>
      </div>
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
