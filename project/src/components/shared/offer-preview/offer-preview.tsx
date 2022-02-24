import { OfferPreviewProps } from 'src/types/offer-preview';
import React from 'react';
import PreviewImageWrapper from 'src/components/shared/preview-image-wrapper/preview-image-wrapper';
import PreviewDescriptionWrapper from 'src/components/shared/preview-description-wrapper/preview-description-wrapper';
import { WrapperClass } from 'src/types/preview-image-wrapper';
import { useNavigate } from 'react-router-dom';
import { AppRoutingPath } from 'src/types/app';

function OfferPreview({
  offer,
  onImgMouseEnter = () => undefined,
}: OfferPreviewProps) {
  const { isPremium, previewImage } = offer;
  const navigate = useNavigate();

  const handleImgMouseEnter = () => {
    onImgMouseEnter(offer);
  };

  const handleTitleClick = () => {
    navigate(`${AppRoutingPath.OfferPage}/${offer.id}`);
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
          onTitleClick={handleTitleClick}
        />
      </div>
    </article>
  );
}

export default OfferPreview;
