export const toggleActiveBookmarkClass = ({
  isActive,
  className,
}: {
  isActive: boolean;
  className: string;
}): string => [className, isActive && `${className}--active`, 'button'].filter(Boolean).join(' ');
