import SortDropdown from 'src/components/shared/sort-dropdown/sort-dropdown';
import { MainPageSortOffersProps } from 'src/types/main-page';
import { memo } from 'react';

export function MainPageSortOffers({
  dropdownItems,
  onDropdownItemClick = () => undefined,
}: MainPageSortOffersProps) {
  return <SortDropdown items={dropdownItems} onDropdownItemClick={onDropdownItemClick} />;
}

export default memo(MainPageSortOffers, (prev, next) => prev.dropdownItems === next.dropdownItems);
