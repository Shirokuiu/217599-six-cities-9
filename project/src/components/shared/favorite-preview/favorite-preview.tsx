import React from 'react';

import { FavoritePreviewProps } from 'src/types/favorite-preview';
import PreviewImageWrapper from 'src/components/shared/preview-image-wrapper/preview-image-wrapper';
import PreviewDescriptionWrapper from 'src/components/shared/preview-description-wrapper/preview-description-wrapper';
import { WrapperClass } from 'src/types/preview-image-wrapper';
import { AppRoutingPath } from 'src/types/app';
import { Link } from 'react-router-dom';

function FavoritePreview({ offer }: FavoritePreviewProps) {
  const { isPremium, previewImage, title, id } = offer;

  return (
    <article key={offer.id} className="favorites__card place-card">
      <PreviewImageWrapper
        isPremium={isPremium}
        wrapperClass={WrapperClass.FavoritePreview}
      >
        <img
          className="place-card__image"
          src={previewImage}
          width="150"
          height="110"
          alt="Place image"
        />
      </PreviewImageWrapper>
      <div className="favorites__card-info place-card__info">
        <PreviewDescriptionWrapper
          offer={offer}
          renderTitle={() => (
            <Link to={`${AppRoutingPath.OfferPage}/${id}`}>{title}</Link>
          )}
        />
      </div>
    </article>
  );
}

export default FavoritePreview;
