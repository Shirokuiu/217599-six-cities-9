import React from 'react';

import { PreviewImageWrapperProps } from 'src/types/preview-image-wrapper';

function PreviewImageWrapper({
  isPremium,
  wrapperClass,
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
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={wrapperClass}>
        <a onMouseEnter={handleImgMouseEnter} onMouseLeave={handleMouseLeave}>
          {children}
        </a>
      </div>
    </>
  );
}

export default PreviewImageWrapper;
