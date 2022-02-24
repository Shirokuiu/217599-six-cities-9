import { PreviewImageWrapperProps } from 'src/types/preview-image-wrapper';
import React from 'react';

function PreviewImageWrapper({
  isPremium,
  previewImage,
  onImgMouseEnter,
}: PreviewImageWrapperProps) {
  const handleImgMouseEnter = (evt: React.MouseEvent) => {
    evt.preventDefault();

    if (onImgMouseEnter) {
      onImgMouseEnter();
    }
  };

  return (
    <>
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className="place-card__image-wrapper">
        <a onMouseEnter={handleImgMouseEnter}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
    </>
  );
}

export default PreviewImageWrapper;
