export const toggleActiveBookmarkClass = ({
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
