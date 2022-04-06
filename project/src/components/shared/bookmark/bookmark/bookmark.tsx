import { useState } from 'react';

import { BookmarkProps, StyleMode } from 'src/types/bookmark';
import { getAriaText } from 'src/components/shared/bookmark/helpers/get-aria-text';
import { toggleActiveBookmarkClass } from 'src/components/shared/bookmark/helpers/toogle-active-bookmark-class';
import BookmarkIcon from 'src/components/shared/bookmark/bookmark-icon';

function Bookmark({
  isActive: inBookmark,
  className = 'place-card__bookmark-button',
  classNameIcon = 'place-card__bookmark-icon',
  styleMode = StyleMode.Default,
  onToggleActive = () => undefined,
}: BookmarkProps) {
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
      className={toggleActiveBookmarkClass({ isActive, className })}
      type="button"
      data-testid="bookmark"
    >
      <BookmarkIcon styleMode={styleMode} classNameIcon={classNameIcon} />
      <span className="visually-hidden" data-testid="aria-text">
        {getAriaText(isActive)}
      </span>
    </button>
  );
}

export default Bookmark;
