import { BookmarkProps } from 'src/types/bookmark';
import { useState } from 'react';

const getAriaText = (isActive: boolean): string =>
  isActive ? 'In bookmarks' : 'To bookmarks';

const toggleActiveBookmarkClass = ({
  isActive,
}: {
  isActive: boolean;
}): string =>
  [
    'place-card__bookmark-button',
    isActive ? 'place-card__bookmark-button--active' : undefined,
    'button',
  ]
    .filter((className) => className)
    .join(' ');

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
