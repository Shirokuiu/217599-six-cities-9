import React from 'react';
import { Link } from 'react-router-dom';

import { FavoritePreviewProps } from 'src/types/favorite-page';
import PreviewImageWrapper from 'src/components/shared/preview-image-wrapper/preview-image-wrapper';
import PreviewDescriptionWrapper from 'src/components/shared/preview-description-wrapper/preview-description-wrapper';
import { WrapperClass } from 'src/types/preview-image-wrapper';
import { AppRoutingPath } from 'src/types/app';

function FavoritePreview({ favorite, renderBookmark = () => undefined }: FavoritePreviewProps) {
  const { isPremium, previewImage, title, id } = favorite;

  return (
    <article key={favorite.id} className="favorites__card place-card">
      <PreviewImageWrapper isPremium={isPremium} wrapperClass={WrapperClass.FavoritePreview}>
        <img
          className="place-card__image"
          src={previewImage}
          width="150"
          height="110"
          alt="Place image"
          data-testid="place-image"
        />
      </PreviewImageWrapper>
      <div className="favorites__card-info place-card__info">
        <PreviewDescriptionWrapper
          offer={favorite}
          renderTitle={() => <Link to={`${AppRoutingPath.OfferPage}/${id}`}>{title}</Link>}
          renderBookMark={renderBookmark}
        />
      </div>
    </article>
  );
}

export default FavoritePreview;
