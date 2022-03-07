import SortDropdown from 'src/components/shared/sort-dropdown/sort-dropdown';
import { buildDropdownItems } from 'src/components/pages/main-page/helpers/build-dropdown-items';
import { DropdownItem } from 'src/types/dropdown';

function MainPageSortOffers() {
  const dropdownItems: DropdownItem[] = buildDropdownItems();

  return <SortDropdown items={dropdownItems} />;
}

export default MainPageSortOffers;
