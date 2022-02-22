import { BookmarkProps } from 'src/types/bookmark';
import { useEffect, useState } from 'react';

const getAriaText = (isActive: boolean): string =>
  isActive ? 'In bookmarks' : 'To bookmarks';

const toggleActiveBookmarkClass = ({
  isActive,
  classNames,
  classNameActive,
}: {
  isActive: boolean;
  classNames: string[];
  classNameActive: string;
}): string =>
  [...classNames, isActive ? classNameActive : undefined, 'button']
    .filter((className) => className)
    .join(' ');

function Bookmark({
  isActive: inBookmark,
  classNames,
  classNameActive,
}: BookmarkProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(inBookmark);
  }, [inBookmark]);

  const handleBookmarkClick = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <button
      onClick={handleBookmarkClick}
      className={toggleActiveBookmarkClass({
        isActive,
        classNames,
        classNameActive,
      })}
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
