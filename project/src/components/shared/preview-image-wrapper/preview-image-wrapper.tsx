import { PreviewImageWrapperProps } from 'src/types/preview-image-wrapper';
import React from 'react';

function PreviewImageWrapper({
  isPremium,
  onImgMouseEnter,
  wrapperClass,
  children,
}: PreviewImageWrapperProps) {
  const handleImgMouseEnter = (evt: React.MouseEvent) => {
    evt.preventDefault();

    if (onImgMouseEnter) {
      onImgMouseEnter();
    }
  };

  return (
    <>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={wrapperClass}>
        <a onMouseEnter={handleImgMouseEnter}>{children}</a>
      </div>
    </>
  );
}

export default PreviewImageWrapper;
