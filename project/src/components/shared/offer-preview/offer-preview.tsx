import React from 'react';

import { OfferPreviewProps } from 'src/types/offer-preview';
import PreviewImageWrapper from 'src/components/shared/preview-image-wrapper/preview-image-wrapper';
import PreviewDescriptionWrapper from 'src/components/shared/preview-description-wrapper/preview-description-wrapper';
import { WrapperClass } from 'src/types/preview-image-wrapper';
import { AppRoutingPath } from 'src/types/app';
import { Link } from 'react-router-dom';

function OfferPreview({
  offer,
  onImgMouseEnter = () => undefined,
}: OfferPreviewProps) {
  const { isPremium, previewImage, title, id } = offer;

  const handleImgMouseEnter = () => {
    onImgMouseEnter(offer);
  };

  return (
    <article className="cities__place-card place-card">
      <PreviewImageWrapper
        wrapperClass={WrapperClass.OfferPreview}
        isPremium={isPremium}
        onImgMouseEnter={handleImgMouseEnter}
      >
        <img
          className="place-card__image"
          src={previewImage}
          width="260"
          height="200"
          alt="Place image"
        />
      </PreviewImageWrapper>
      <div className="place-card__info">
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

export default OfferPreview;
