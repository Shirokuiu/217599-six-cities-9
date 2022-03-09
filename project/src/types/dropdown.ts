export type DropdownProps = {
  items: DropdownItem[];
  onDropdownItemClick?: (dropdownItem: DropdownItem) => void;
};

export type DropdownItem = {
  id: number;
  text: string;
  value: string;
  isActive: boolean;
};
