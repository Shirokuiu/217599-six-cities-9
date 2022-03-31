import React from 'react';

import { PreviewImageWrapperProps, WrapperClass } from 'src/types/preview-image-wrapper';

function PreviewImageWrapper({
  isPremium = false,
  wrapperClass = WrapperClass.OfferPreview,
  children,
  onImgMouseEnter = () => undefined,
  onImgMouseLeave = () => undefined,
}: PreviewImageWrapperProps) {
  const handleImgMouseEnter = (evt: React.MouseEvent) => {
    preventDefault(evt);
    onImgMouseEnter();
  };

  const handleMouseLeave = (evt: React.MouseEvent) => {
    preventDefault(evt);
    onImgMouseLeave();
  };

  const preventDefault = (evt: React.MouseEvent) => {
    evt.preventDefault();
  };

  return (
    <>
      {isPremium && (
        <div className="place-card__mark" data-testid="mark">
          <span>Premium</span>
        </div>
      )}
      <div className={wrapperClass} data-testid="link-wrapper">
        <a onMouseEnter={handleImgMouseEnter} onMouseLeave={handleMouseLeave}>
          {children}
        </a>
      </div>
    </>
  );
}

export default PreviewImageWrapper;
