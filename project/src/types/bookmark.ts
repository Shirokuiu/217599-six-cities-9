export type BookmarkProps = {
  isActive: boolean;
  isLoading?: boolean;
  onToggleActive?: (isActive: boolean) => void;
};
