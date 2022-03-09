import { DropdownItem } from 'src/types/dropdown';

export type SortDropdownProps = {
  items: DropdownItem[];
  onDropdownItemClick?: (dropdownItem: DropdownItem) => void;
};
