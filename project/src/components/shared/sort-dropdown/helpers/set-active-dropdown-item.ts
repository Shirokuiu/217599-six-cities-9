import { DropdownItem } from 'src/types/dropdown';

export const setActiveDropdownItem = ({
  dropdownItems,
  currentItem,
}: {
  dropdownItems: DropdownItem[];
  currentItem: DropdownItem;
}): DropdownItem[] =>
  dropdownItems.map((dropdownItem: DropdownItem) => ({
    ...dropdownItem,
    isActive: currentItem.id === dropdownItem.id,
  }));
