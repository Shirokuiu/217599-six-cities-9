import { OfferPreviewProps } from 'src/types/offer-preview';
import React from 'react';
import PreviewImageWrapper from 'src/components/shared/preview-image-wrapper/preview-image-wrapper';
import PreviewDescriptionWrapper from 'src/components/shared/preview-description-wrapper/preview-description-wrapper';
import { WrapperClass } from 'src/types/preview-image-wrapper';

function OfferPreview({ offer, onImgMouseEnter }: OfferPreviewProps) {
  const { isPremium, previewImage } = offer;

  const handleImgMouseEnter = () => {
    if (onImgMouseEnter) {
      onImgMouseEnter(offer);
    }
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
        <PreviewDescriptionWrapper offer={offer} />
      </div>
    </article>
  );
}

export default OfferPreview;
