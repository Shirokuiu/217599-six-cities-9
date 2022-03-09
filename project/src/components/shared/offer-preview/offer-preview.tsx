import React from 'react';
import { Link } from 'react-router-dom';

import { OfferPreviewProps } from 'src/types/offer-preview';
import PreviewImageWrapper from 'src/components/shared/preview-image-wrapper/preview-image-wrapper';
import PreviewDescriptionWrapper from 'src/components/shared/preview-description-wrapper/preview-description-wrapper';
import { WrapperClass } from 'src/types/preview-image-wrapper';
import { AppRoutingPath } from 'src/types/app';

function OfferPreview({
  offer,
  onImgMouseEnter = () => undefined,
  onImgMouseLeave = () => undefined,
}: OfferPreviewProps) {
  const { isPremium, previewImage, title, id } = offer;

  const handleImgMouseEnter = () => {
    onImgMouseEnter(offer);
  };

  const handleImgMouseLeave = () => {
    onImgMouseLeave();
  };

  return (
    <article className="cities__place-card place-card">
      <PreviewImageWrapper
        wrapperClass={WrapperClass.OfferPreview}
        isPremium={isPremium}
        onImgMouseEnter={handleImgMouseEnter}
        onImgMouseLeave={handleImgMouseLeave}
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
