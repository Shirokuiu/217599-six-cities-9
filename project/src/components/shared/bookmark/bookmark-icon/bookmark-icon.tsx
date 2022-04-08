import { BookmarkIconProps } from 'src/types/bookmark';
import { getIconRect } from 'src/components/shared/bookmark/helpers/get-icon-rect';

function BookmarkIcon({ styleMode, classNameIcon }: BookmarkIconProps) {
  const iconRect = getIconRect(styleMode);

  return (
    <svg className={classNameIcon} {...iconRect}>
      <use xlinkHref="#icon-bookmark" />
    </svg>
  );
}

export default BookmarkIcon;
