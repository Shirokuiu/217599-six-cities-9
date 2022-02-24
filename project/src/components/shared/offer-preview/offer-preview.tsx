import { OfferPreviewProps } from 'src/types/offer-preview';
import React from 'react';
import PreviewImageWrapper from 'src/components/shared/preview-image-wrapper/preview-image-wrapper';
import PreviewDescriptionWrapper from 'src/components/shared/preview-description-wrapper/preview-description-wrapper';

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
        isPremium={isPremium}
        previewImage={previewImage}
        onImgMouseEnter={handleImgMouseEnter}
      />
      <div className="place-card__info">
        <PreviewDescriptionWrapper offer={offer} />
      </div>
    </article>
  );
}

export default OfferPreview;
