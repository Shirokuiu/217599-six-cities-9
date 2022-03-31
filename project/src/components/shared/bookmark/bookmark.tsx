import { useState } from 'react';

import { BookmarkProps } from 'src/types/bookmark';
import { getAriaText } from 'src/components/shared/bookmark/helpers/get-aria-text';
import { toggleActiveBookmarkClass } from 'src/components/shared/bookmark/helpers/toogle-active-bookmark-class';

function Bookmark({ isActive: inBookmark, onToggleActive = () => undefined }: BookmarkProps) {
  const [isActive, setIsActive] = useState(inBookmark);

  const handleBookmarkClick = () => {
    setIsActive((prevState) => {
      onToggleActive(!prevState);

      return !prevState;
    });
  };

  return (
    <button
      onClick={handleBookmarkClick}
      className={toggleActiveBookmarkClass({ isActive })}
      type="button"
      data-testid="bookmark"
    >
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden" data-testid="aria-text">
        {getAriaText(isActive)}
      </span>
    </button>
  );
}

export default Bookmark;
