import { useState } from 'react';

import { BookmarkProps } from 'src/types/bookmark';
import { getAriaText } from 'src/components/shared/bookmark/helpers/get-aria-text';
import { toggleActiveBookmarkClass } from 'src/components/shared/bookmark/helpers/toogle-active-bookmark-class';

function Bookmark({ isActive: inBookmark }: BookmarkProps) {
  const [isActive, setIsActive] = useState(inBookmark);

  const handleBookmarkClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <button
      onClick={handleBookmarkClick}
      className={toggleActiveBookmarkClass({ isActive })}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{getAriaText(isActive)}</span>
    </button>
  );
}

export default Bookmark;
